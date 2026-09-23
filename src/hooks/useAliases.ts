import { useCallback, useEffect, useState } from 'react';
import { Alias, AliasFormValues, Patient } from '../types';
import { patientService } from '../services/patientService';
import { generateId } from '../lib/utils';

interface UseAliasesResult {
  patient: Patient | null;
  aliases: Alias[];
  loading: boolean;
  saving: boolean;
  addAlias: (values: AliasFormValues) => void;
  updateAlias: (id: string, values: AliasFormValues) => void;
  deleteAlias: (id: string) => void;
  shuffleAlias: (id: string) => void;
  save: () => Promise<void>;
  reset: () => Promise<void>;
}

export function useAliases(): UseAliasesResult {
  const [patient, setPatient] = useState<Patient | null>(null);
  const [aliases, setAliases] = useState<Alias[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const load = useCallback(async () => {
    setLoading(true);
    const data = await patientService.getPatient();
    setPatient(data);
    setAliases(data.aliases);
    setLoading(false);
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  const addAlias = useCallback((values: AliasFormValues) => {
    setAliases((prev) => [...prev, { id: generateId(), ...values }]);
  }, []);

  const updateAlias = useCallback((id: string, values: AliasFormValues) => {
    setAliases((prev) => prev.map((a) => (a.id === id ? { ...a, ...values } : a)));
  }, []);

  const deleteAlias = useCallback((id: string) => {
    setAliases((prev) => prev.filter((a) => a.id !== id));
  }, []);

  const shuffleAlias = useCallback((id: string) => {
    setAliases((prev) =>
      prev.map((a) =>
        a.id === id
          ? { ...a, first: a.last, last: a.first }
          : a
      )
    );
  }, []);

  const save = useCallback(async () => {
    setSaving(true);
    await patientService.saveAliases(aliases);
    setSaving(false);
  }, [aliases]);

  const reset = useCallback(async () => {
    await load();
  }, [load]);

  return {
    patient,
    aliases,
    loading,
    saving,
    addAlias,
    updateAlias,
    deleteAlias,
    shuffleAlias,
    save,
    reset,
  };
}
