#pragma strict
function Update(){
//開始執行
if(Input.GetKeyDown (KeyCode.W)){
//當按下W鍵時
transform.Translate(0,12,0);}
//
if (Input.GetKey (KeyCode.A)){
//當按下A鍵時
transform.Translate(0,  0,  -0.7);}
//
if (Input.GetKey (KeyCode.D)){
//當按下D鍵時
transform.Translate(0, 0, 0.7);}
//
if (Input.GetKey (KeyCode.S)){
//當按下S鍵時
transform.Translate(0,0,0);}

}
