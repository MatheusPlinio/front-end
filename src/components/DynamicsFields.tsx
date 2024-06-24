import React from 'react';
import { useFormContext, useFieldArray } from 'react-hook-form';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Minus, Plus } from 'lucide-react';

interface DynamicInputsProps {
  name: string;
}

const DynamicInputs: React.FC<DynamicInputsProps> = ({ name }) => {
  const { control, register } = useFormContext();
  const { fields, append, remove } = useFieldArray({ control, name });

  const handleAddFields = () => {
    append({ attribute: '', value: '' });
  };

  const handleRemoveFields = () => {
    if (fields.length > 0) {
      remove(fields.length - 1);
    }
  };

  return (
    <div className='w-full'>
      <Label className='text-md text-indigo-500'>
        Existe Atributos?
      </Label>
      <div className='max-h-64 overflow-y-auto'>
        {fields.map((field, index) => (
          <div key={field.id}>
            <Label className='text-md text-indigo-500'>
              Atributo
            </Label>
            <Input
              type="text"
              {...register(`${name}.${index}.attribute` as const)}
              placeholder="Atributo"
              className="col-span-3 border-none"
            />
            <Label className='text-md text-indigo-500'>
              Valor
            </Label>
            <Input
              type="text"
              {...register(`${name}.${index}.value` as const)}
              placeholder="Valor"
              className="col-span-3 border-none"
            />
          </div>
        ))}
      </div>
      <div className="flex space-x-2 mt-2">
        <Plus size={30} onClick={handleAddFields} className='bg-indigo-500 p-2 text-white rounded-full hover:bg-indigo-700 cursor-pointer' />
        <Minus size={30} onClick={handleRemoveFields} className='bg-gray-700 p-2 text-white rounded-full hover:bg-gray-900 cursor-pointer' />
      </div>
    </div>
  );
};

export default DynamicInputs;
