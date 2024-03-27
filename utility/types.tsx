export interface APIEntry {
  word: string;
  phonetic: string;
  phonetics: Phonetic[];
  meanings: Meaning[];
  sourceUrls: string;
}
export interface Phonetic {
  text: string;
  audio: string;
}
export interface Meaning {
  partOfSpeech: string;
  definitions: Definition[];
  synonyms?: string[];
  antonyms?: string[];
}
export interface Definition {
  definition: string;
  example?: string;
}

export interface DefinitionProps {
  dictionaryEntries: APIEntry[];
}

export interface SearchBarProps {
  setUserInput: (arg0: string) => void;
  setDictionaryEntries: any;
  toggleActiveError: (arg0: boolean) => void;
}

export interface ErrorPageProps {
  userInput: string;
}
