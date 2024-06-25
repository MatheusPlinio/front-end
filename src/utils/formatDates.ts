import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

const ToIsoForToPtBR = (date: Date) => {
    const formatedBirthday = format(new Date(date), 'dd/MM/yyyy', { locale: ptBR });

    return formatedBirthday;
}

export { ToIsoForToPtBR }