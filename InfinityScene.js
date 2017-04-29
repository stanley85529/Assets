#pragma strict
var speed : float = 0.01 ;

function Update () {
  var x :float = GetComponent.<Renderer>().material.GetTextureOffset("_MainTex").x ;
  GetComponent.<Renderer>().material.SetTextureOffset("_MainTex", Vector2(x+speed,0)) ;
}