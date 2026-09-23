import { useState } from 'react';
import { Plus } from 'lucide-react';
import { Card, CardHeader, CardBody, CardFooter } from '../components/ui/Card';
import { ReadOnlyField } from '../components/ui/ReadOnlyField';
import { IconButton } from '../components/ui/IconButton';
import { SectionPanel } from '../components/sections/SectionPanel';
import { FooterActions } from '../components/sections/FooterActions';
import { AliasesTable } from '../components/features/AliasesTable';
import { AliasFormDialog } from '../components/features/AliasFormDialog';
import { ConfirmDialog } from '../components/features/ConfirmDialog';
import { useAliases } from '../hooks/useAliases';
import { Alias, AliasFormValues } from '../types';

export default function PatientAliasesPage() {
  const {
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
  } = useAliases();

  const [dialogOpen, setDialogOpen] = useState(false);
  const [editingAlias, setEditingAlias] = useState<Alias | null>(null);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [aliasToDelete, setAliasToDelete] = useState<Alias | null>(null);

  const handleAddClick = () => {
    setEditingAlias(null);
    setDialogOpen(true);
  };

  const handleEdit = (alias: Alias) => {
    setEditingAlias(alias);
    setDialogOpen(true);
  };

  const handleDelete = (alias: Alias) => {
    setAliasToDelete(alias);
    setConfirmOpen(true);
  };

  const confirmDelete = () => {
    if (aliasToDelete) {
      deleteAlias(aliasToDelete.id);
    }
    setConfirmOpen(false);
    setAliasToDelete(null);
  };

  const handleDialogSubmit = (values: AliasFormValues, id?: string) => {
    if (id) {
      updateAlias(id, values);
    } else {
      addAlias(values);
    }
  };

  const handleSave = async () => {
    await save();
    alert('Patient aliases saved successfully.');
  };

  const handleCancel = async () => {
    await reset();
  };

  if (loading || !patient) {
    return (
      <Card>
        <CardHeader>Patient Aliases</CardHeader>
        <CardBody>
          <p className="text-brand-textSecondary text-sm">Loading patient information...</p>
        </CardBody>
      </Card>
    );
  }

  return (
    <>
      <Card>
        <CardHeader>Patient Aliases</CardHeader>
        <CardBody>
          <ReadOnlyField id="patient-name" label="Patient Name" value={patient.name} />

          <SectionPanel
            title="Aliases"
            headerActions={
              <IconButton
                color="primary"
                label="Add new alias"
                icon={<Plus size={18} />}
                onClick={handleAddClick}
              />
            }
          >
            <AliasesTable
              aliases={aliases}
              onEdit={handleEdit}
              onDelete={handleDelete}
              onShuffle={(a) => shuffleAlias(a.id)}
            />
          </SectionPanel>
        </CardBody>
        <CardFooter>
          <FooterActions onSave={handleSave} onCancel={handleCancel} saving={saving} />
        </CardFooter>
      </Card>

      <AliasFormDialog
        open={dialogOpen}
        initialValue={editingAlias}
        onClose={() => setDialogOpen(false)}
        onSubmit={handleDialogSubmit}
      />

      <ConfirmDialog
        open={confirmOpen}
        title="Delete Alias"
        message={
          aliasToDelete
            ? `Are you sure you want to delete "${aliasToDelete.first} ${aliasToDelete.last}"?`
            : ''
        }
        onConfirm={confirmDelete}
        onCancel={() => {
          setConfirmOpen(false);
          setAliasToDelete(null);
        }}
      />
    </>
  );
}
