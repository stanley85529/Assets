using UnityEngine;
using System.Collections;

public class bossM : MonoBehaviour {
    public bool status;
    public float hp;
    private Animator Anim;
    // Use this for initialization
    void Awake()
    {
        Anim = GetComponent<Animator>();
    }
	void Start () {
        
       
	}
	
	// Update is called once per frame
	void Update () {

	}
    void setdmg(float dmg)
    {
        Boss2.Instace.Audio.PlayOneShot(Boss2.Instace.A_clip[3]);
        hp -= dmg;
        Anim.Play("s");
        if (hp <= 0)
        {
            Destroy(gameObject);
            Boss2.Instace.next();
            GetComponent<BoxCollider>().enabled = false;
        }
    }
    void OnTriggerEnter(Collider col)
    {
       
        if (col.tag == "knife" && status)
        {
            Debug.Log("knife");
            setdmg(PlayerCtrl1.Instance.ATK);
        }
        if (col.tag == "Projectile" && status)
        {
            Debug.Log("missile");
            setdmg(PlayerCtrl1.Instance.missile_atk);
        }
    }
}
