import { useState } from 'react';
import { format, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, isSameDay, isWeekend, isBefore, startOfDay } from 'date-fns';
import { ptBR } from 'date-fns/locale';

interface DatePickerProps {
  selectedDate: Date | null;
  onDateSelect: (date: Date) => void;
}

export const DatePicker = ({ selectedDate, onDateSelect }: DatePickerProps) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const currentYear = new Date().getFullYear();

  const firstDayOfMonth = startOfMonth(currentMonth);
  const lastDayOfMonth = endOfMonth(currentMonth);
  const days = eachDayOfInterval({
    start: firstDayOfMonth,
    end: lastDayOfMonth,
  });

  // Dias em branco antes do primeiro dia do mês
  const startDayOfWeek = firstDayOfMonth.getDay(); // 0 (Dom) a 6 (Sáb)
  const blanksStart = Array.from({ length: startDayOfWeek });

  // Dias em branco após o último dia do mês
  const endDayOfWeek = lastDayOfMonth.getDay();
  const blanksEnd = Array.from({ length: 6 - endDayOfWeek });

  const isDateDisabled = (date: Date) => {
    const today = startOfDay(new Date());
    return isBefore(date, today);
  };

  const handlePrevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1));
  };

  const handleNextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1));
  };

  return (
    <div className="bg-white dark:bg-neutral-800 rounded-2xl shadow-lg p-4 w-full max-w-xs mx-auto sm:max-w-sm md:max-w-md">
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={handlePrevMonth}
          className="p-2 hover:bg-gray-100 dark:hover:bg-neutral-700 rounded-full transition-colors"
          aria-label="Mês anterior"
        >
          <svg className="w-6 h-6 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <h2 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">
          {format(currentMonth, 'MMMM yyyy', { locale: ptBR })}
        </h2>
        <button
          onClick={handleNextMonth}
          className="p-2 hover:bg-gray-100 dark:hover:bg-neutral-700 rounded-full transition-colors"
          aria-label="Próximo mês"
        >
          <svg className="w-6 h-6 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      <div className="grid grid-cols-7 gap-1 sm:gap-2 mb-2">
        {['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'].map((day) => (
          <div
            key={day}
            className="text-center text-xs sm:text-sm font-medium text-gray-500 dark:text-gray-400 py-1 sm:py-2"
          >
            {day}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-1 sm:gap-2">
        {/* Espaços em branco antes do primeiro dia */}
        {blanksStart.map((_, idx) => (
          <div key={`blank-start-${idx}`} />
        ))}
        {/* Dias do mês */}
        {days.map((day) => {
          const isSelected = selectedDate && isSameDay(day, selectedDate);
          const isSaturday = day.getDay() === 6;
          const isSunday = day.getDay() === 0;
          const isDisabled = isDateDisabled(day);
          const isCurrentMonth = isSameMonth(day, currentMonth);

          return (
            <button
              key={day.toString()}
              onClick={() => !isDisabled && onDateSelect(day)}
              disabled={isDisabled}
              className={`
                aspect-square p-1 sm:p-2 rounded-xl text-center transition-all text-xs sm:text-base
                ${isSelected
                  ? 'bg-blue-600 text-white font-semibold'
                  : (isSaturday || isSunday)
                    ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 hover:bg-blue-100 dark:hover:bg-blue-900/30'
                    : isDisabled
                      ? 'bg-gray-100 dark:bg-neutral-700 text-gray-400 dark:text-gray-500 cursor-not-allowed'
                      : 'hover:bg-gray-100 dark:hover:bg-neutral-700 text-gray-700 dark:text-gray-300'
                }
                ${!isCurrentMonth && 'opacity-50'}
              `}
            >
              {format(day, 'd')}
            </button>
          );
        })}
        {/* Espaços em branco após o último dia */}
        {blanksEnd.map((_, idx) => (
          <div key={`blank-end-${idx}`} />
        ))}
      </div>

      <div className="mt-4 space-y-2 text-sm text-gray-600 dark:text-gray-400">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-blue-50 dark:bg-blue-900/20 border-2 border-blue-600 dark:border-blue-400"></div>
          <span>Fins de semana disponíveis</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-gray-100 dark:bg-neutral-700"></div>
          <span>Datas indisponíveis</span>
        </div>
      </div>
    </div>
  );
}; 