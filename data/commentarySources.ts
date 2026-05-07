export interface CommentarySource {
  id: string;
  label: string;
  prefix: string;
  type?: 'worlddic' | 'patristic' | 'ai' | 'wordstudy' | 'helloao';
}

export const COMMENTARY_SOURCES: CommentarySource[] = [
  { id: 'wordstudy',      label: 'Greek / Hebrew',    prefix: '',             type: 'wordstudy' },
  { id: 'ai',             label: 'AI Commentary',     prefix: '',             type: 'ai'        },
  { id: 'patristic',      label: 'Church Fathers',    prefix: '',             type: 'patristic' },
  // HelloAO sources — all 66 books, no rate limits
  { id: 'mh',             label: 'Matthew Henry',     prefix: 'Matt_Hen_Wh',  type: 'helloao'  },
  { id: 'jfb',            label: 'JFB Critical',      prefix: 'Critical_Expl',type: 'helloao'  },
  { id: 'adam-clarke',    label: 'Adam Clarke',       prefix: 'Adam_Cla',     type: 'helloao'  },
  { id: 'john-gill',      label: 'John Gill',         prefix: 'John_Gill',    type: 'helloao'  },
  { id: 'tyndale',        label: 'Tyndale Notes',     prefix: '',             type: 'helloao'  },
  { id: 'keil-delitzsch', label: 'Keil-Delitzsch',    prefix: '',             type: 'helloao'  },
  // Worlddic sources
  { id: 'mh-concise',     label: 'Henry (Concise)',   prefix: 'Matt_Hen_Con'  },
  { id: 'spurgeon',       label: 'Spurgeon',          prefix: 'Spur_Ex'       },
  { id: 'calvin',         label: 'Calvin',            prefix: 'Calvin'        },
  { id: 'albert-barnes',  label: 'Albert Barnes',     prefix: 'Albert_Bar'    },
  { id: 'wesley',         label: 'Wesley',            prefix: 'Wesley'        },
  { id: 'ellicott',       label: 'Ellicott',          prefix: 'Ellicott'      },
  { id: 'pulpit',         label: 'Pulpit',            prefix: 'Pulpit'        },
  { id: 'scofield',       label: 'Scofield',          prefix: 'Scofield'      },
  { id: 'bridgeway',      label: 'Bridgeway',         prefix: 'Bridgeway'     },
  { id: 'bullinger',      label: 'Bullinger',         prefix: 'Bullinger'     },
  { id: 'joseph-benson',  label: 'Joseph Benson',     prefix: 'Joseph'        },
];
