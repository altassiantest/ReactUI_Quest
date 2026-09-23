import { Pencil, Trash2, Shuffle } from 'lucide-react';
import { Alias } from '../../types';
import { IconButton } from '../ui/IconButton';
import { Table, THead, TBody, TR, TH, TD } from '../ui/Table';

interface AliasesTableProps {
  aliases: Alias[];
  onEdit: (alias: Alias) => void;
  onDelete: (alias: Alias) => void;
  onShuffle: (alias: Alias) => void;
}

export function AliasesTable({ aliases, onEdit, onDelete, onShuffle }: AliasesTableProps) {
  return (
    <div className="overflow-x-auto bg-white border border-brand-tableBorder rounded">
      <Table>
        <THead>
          <TR>
            <TH>Last</TH>
            <TH>First</TH>
            <TH>Middle</TH>
            <TH>Suffix</TH>
            <TH className="w-40 text-right">Actions</TH>
          </TR>
        </THead>
        <TBody>
          {aliases.length === 0 ? (
            <TR>
              <TD colSpan={5} className="text-center text-brand-textSecondary py-6">
                No aliases available.
              </TD>
            </TR>
          ) : (
            aliases.map((alias) => (
              <TR key={alias.id}>
                <TD>{alias.last}</TD>
                <TD>{alias.first}</TD>
                <TD>{alias.middle}</TD>
                <TD>{alias.suffix}</TD>
                <TD>
                  <div className="flex items-center justify-end gap-1.5">
                    <IconButton
                      color="primary"
                      label={`Edit alias ${alias.first} ${alias.last}`}
                      icon={<Pencil size={16} />}
                      onClick={() => onEdit(alias)}
                    />
                    <IconButton
                      color="danger"
                      label={`Delete alias ${alias.first} ${alias.last}`}
                      icon={<Trash2 size={16} />}
                      onClick={() => onDelete(alias)}
                    />
                    <IconButton
                      color="primary"
                      label={`Shuffle alias ${alias.first} ${alias.last}`}
                      icon={<Shuffle size={16} />}
                      onClick={() => onShuffle(alias)}
                    />
                  </div>
                </TD>
              </TR>
            ))
          )}
        </TBody>
      </Table>
    </div>
  );
}
