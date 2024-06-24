import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface Framework {
  id: string;
  name: string;
}

interface ComboBoxProps {
  frameworks: Framework[];
  value: string;
  onSelect: (value: string) => void;
}

export const Combobox = React.forwardRef<HTMLDivElement, ComboBoxProps>(
  ({ frameworks, value, onSelect }, ref) => {
    const [open, setOpen] = React.useState(false);
    const [searchTerm, setSearchTerm] = React.useState("");
    const [selectedFramework, setSelectedFramework] = React.useState<Framework | null>(
      frameworks.find((framework) => framework.id === value) || null
    );
    const [filteredFrameworks, setFilteredFrameworks] = React.useState<Framework[]>(frameworks);

    React.useEffect(() => {
      // Filtra os frameworks sempre que o searchTerm ou frameworks mudar
      const filtered = frameworks.filter((framework) =>
        framework.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredFrameworks(filtered);
    }, [searchTerm, frameworks]);

    const handleSelect = (id: string) => {
      const framework = frameworks.find((f) => f.id === id);
      setSelectedFramework(framework || null);
      onSelect(id);
      setOpen(false);
    };

    return (
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-[200px] justify-between"
          >
            {selectedFramework ? selectedFramework.name : "Select framework..."}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0" ref={ref}>
          <Command>
            <input
              type="text"
              placeholder="Search framework..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
            <CommandList>
              {filteredFrameworks.length === 0 && (
                <CommandEmpty>No framework found.</CommandEmpty>
              )}
              <CommandGroup>
                {filteredFrameworks.map((framework) => (
                  <CommandItem
                    key={framework.id}
                    value={framework.id}
                    onSelect={() => handleSelect(framework.id)}
                  >
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        value === framework.id ? "opacity-100" : "opacity-0"
                      )}
                    />
                    {framework.name}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    );
  }
);

Combobox.displayName = "Combobox";
