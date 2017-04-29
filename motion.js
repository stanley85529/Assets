#pragma strict

function Update () 
//開始執行
{
if (Input.GetKeyDown(KeyCode.W))
//假如按下鍵盤W鍵
{
 GetComponent.<Animation>().CrossFade("C");
 }

        
 else if (Input.GetKeyUp(KeyCode.W))
{
//否則假如放開鍵盤W鍵
GetComponent.<Animation>().CrossFade("A");

}
if (Input.GetKeyDown(KeyCode.A))
//假如按下鍵盤A鍵
{
 GetComponent.<Animation>().CrossFade("B");

} 
else if (Input.GetKeyUp(KeyCode.A))
//否則假如放開鍵盤A鍵
{
GetComponent.<Animation>().CrossFade("A");

}
if (Input.GetKeyDown(KeyCode.D))
//假如按下鍵盤D鍵
{
GetComponent.<Animation>().CrossFade("B");

}     
else if (Input.GetKeyUp(KeyCode.D))
//否則假如放開鍵盤D鍵
{
 GetComponent.<Animation>().CrossFade("A");

 }
if (Input.GetKeyDown(KeyCode.S))
//假如按下鍵盤S鍵
{
GetComponent.<Animation>().CrossFade("B");
}     
//就執行2_Walk這個動作
else if (Input.GetKeyUp(KeyCode.S))
//否則假如放開鍵盤S鍵
{
GetComponent.<Animation>().CrossFade("A");

}
}
