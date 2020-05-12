import {
    
    PUSH_SAMPLE_BUTTON_REQUEST,
   
  } from "../../const/actionTypes";
  
  /** from
   * Actionは、ユーザーが起こすイベントを定義します
   */
  
  export function putNumber(num) {
    return { type: PUSH_SAMPLE_BUTTON_REQUEST };
  }
  
  