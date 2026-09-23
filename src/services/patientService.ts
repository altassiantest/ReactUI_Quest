import { Patient, Alias } from '../types';
import { mockPatient } from '../data/mockPatient';

let patientStore: Patient = { ...mockPatient, aliases: [...mockPatient.aliases] };

export const patientService = {
  async getPatient(): Promise<Patient> {
    return new Promise((resolve) => {
      setTimeout(() => resolve({ ...patientStore, aliases: [...patientStore.aliases] }), 200);
    });
  },
  async savePatient(patient: Patient): Promise<Patient> {
    return new Promise((resolve) => {
      setTimeout(() => {
        patientStore = { ...patient, aliases: [...patient.aliases] };
        resolve(patientStore);
      }, 200);
    });
  },
  async saveAliases(aliases: Alias[]): Promise<Alias[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        patientStore = { ...patientStore, aliases: [...aliases] };
        resolve(patientStore.aliases);
      }, 200);
    });
  },
};
