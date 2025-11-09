
export type SceneId = 
  | 'START'
  | 'RESTAURANT_INTRO'
  | 'RESTAURANT_CHOICE_PROMPT'
  | 'RESTAURANT_CHOICE_1_SUCCESS'
  | 'RESTAURANT_CHOICE_2_FAIL'
  | 'RESTAURANT_CHOICE_3_END'
  | 'KOGITO_INTRO'
  | 'KOGITO_SATO_STATUE'
  | 'KOGITO_AOYAMA_STATUE'
  | 'KOGITO_RESONANCE'
  | 'HAMAO_INTRO'
  | 'HAMAO_OFFERING_CHOICE'
  | 'HAMAO_OFFERING_RESULT'
  | 'HAMAO_RESONANCE'
  | 'ENDING_GOOD'
  | 'ENDING_NEUTRAL'
  | 'ENDING_BAD';


export interface TextLine {
  speaker?: string;
  dialogue: string;
}

export interface Choice {
  text: string;
  points: number;
  nextScene: SceneId;
}

export interface Scene {
  title?: string;
  text: TextLine[];
  choices?: Choice[];
  nextScene?: SceneId;
  backgroundImage: string;
}

export interface GameState {
  sceneId: SceneId;
  points: number;
}
