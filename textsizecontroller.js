var object = JSON.parse(textsize);

var ffs = object.default ;
var mms = object.max ;
var mns = object.min ;
var sca = object.scale ;

$('#' + object.containerid).prepend('<style>@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@900&display=swap");@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css");.textsizecontroller{width:90%;max-width:250px;min-width:180px;height:60px;background:#fff;box-shadow:0 0 15px 1px rgba(0,0,0,0.05);border-radius:12px;position:relative;overflow:hidden}.textsizecontrollerbtn{width:60px;height:60px;background:rgba(0, 0, 0, 0);font-size:30px;position:absolute;display:flex;justify-content:center;align-items:center;font-family:"Noto Sans TC",sans-serif;font-weight:900;outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0);clip-path:inset(0px 0px);overflow:hidden}.textsizecontrollerbtn::before{content:"";position:absolute;background-color:rgba(0, 0, 0, 0.2);border-radius:99em;left:50%;top:50%;transform:translate(-50%, -50%) scale(1.7);opacity:0;transition:transform .3s, opacity 1s;width:100%;height:100%;overflow:hidden;-webkit-filter:blur(1px);filter:blur(1px)}.textsizecontrollerbtn:active::before{transition:0s;opacity: .6;transform:translate(-50%, -50%) scale(0);overflow:hidden}.textsizecontrolleradd{top:0px;right:0px;border-left:1px #e3e3e3 solid;border-radius:0px 12px 12px 0px}.textsizecontrollerre{top:0px;left:0px;border-right:1px #e3e3e3 solid;border-radius:12px 0px 0px 12px}.textsizecontrollersize{position:absolute;top:0px;left:61px;height:60px;width:calc(100% - 122px);background:rgba(0, 0, 0, 0);font-size:25px;display:flex;justify-content:center;align-items:center;font-family:"Noto Sans TC",sans-serif;font-weight:900;outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0)}.textsizecontrollersizebgbox{position:absolute;top:0px;left:61px;height:60px;width:calc(100% - 122px);background:rgba(0,0,0,0)}.textsizecontrollersizebgbar{position:absolute;top:0px;left:0px;height:60px;width:50%;background:#f5f5f5;transition:0.2s}</style> <div class="textsizecontroller"><div class="textsizecontrollersizebgbar"></div><div class="textsizecontrollerbtn textsizecontrolleradd"> <i class="fas fa-plus"></i></div><div class="textsizecontrollersize">' + ffs + '%</div><div class="textsizecontrollerbtn textsizecontrollerre"> <i class="fas fa-minus"></i></div></div>');

function setsize() {
$('#' + object.textcontainerid).css({'font-size':(ffs/100)*sca + 'px','transition':'0.2s'});
}

document.querySelector('.textsizecontrolleradd').addEventListener("click", add);
function add() {
      ffs+=10
      if (ffs <= mns) ffs = mns
  if (ffs >= mms) ffs = mms
  document.querySelector('.textsizecontrollersizebgbar').style.width = (ffs-mns)/(mms-mns)*100 + '%'
document.querySelector('.textsizecontrollersize').innerHTML = ffs + '%'

setsize();
}
document.querySelector('.textsizecontrollerre').addEventListener("click", re);
function re() {
      ffs-=10
      if (ffs <= mns) ffs = mns
  if (ffs >= mms) ffs = mms
  document.querySelector('.textsizecontrollersizebgbar').style.width = (ffs-mns)/(mms-mns)*100 + '%'
document.querySelector('.textsizecontrollersize').innerHTML = ffs + '%'

setsize();

}

document.querySelector('.textsizecontrollersizebgbar').style.width = (ffs-mns)/(mms-mns)*100 + '%'
setsize();
