export interface Alias {
  id: string;
  last: string;
  first: string;
  middle: string;
  suffix: string;
}

export interface Patient {
  id: string;
  name: string;
  aliases: Alias[];
}

export type AliasFormValues = Omit<Alias, 'id'>;
