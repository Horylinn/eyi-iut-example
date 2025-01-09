import { signal }from '@preact/signals-react';

export interface FilterState {
    search: string;
    building: { value: string, label: string }[];
    floor: { value: string, label: string }[];
    presence: string;
}

export const initialFilters: FilterState = {
    search: "",
    building: [{ value: "Tous", label: "Tous" }],
    floor: [{ value: "Tous", label: "Tous" }],
    presence: "Tous"
}

export const $filterSignal = signal<FilterState>(initialFilters);

export const $resetFilters = () => {
  $filterSignal.value = initialFilters;
};

export const $updateFilters = (updatedValues: Partial<FilterState>) => {
  $filterSignal.value = { ...$filterSignal.value, ...updatedValues };
};