import {
    
    PUSH_SAMPLE_TAB_REQUEST,
   
  } from "../../const/actionType";
  
  /** from
   * Actionは、ユーザーが起こすイベントを定義します
   */
  
  export function tab(num) {
    return { type: PUSH_SAMPLE_TAB_REQUEST };
  }
  
  