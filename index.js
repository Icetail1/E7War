/**
 * 炮塔战争主程序
 * by littlefean
 */

let app = document.querySelector(".gameApp");
let interfaceArr = app.children;
const UP_LEVEL_ICON = new Image();
UP_LEVEL_ICON.src = "icon/icon_upgrade.png";

window.onload = function () {
    mainInterface();
}

Array.prototype.remove = function(val) {
  var index = this.indexOf(val);
  if (index > -1) {
    this.splice(index, 1);
  }
}

function getWordCnt(val,m){ 
  var cnt = 0; 
  for(var i= 0, l = m.length; i< l; i++){  
     if(m[i].name===val.name){
        if(m[i].level===val.level)
         { cnt++;}
     }
  } 
  return cnt; 
}

function deleteUnique(val,m){ 
  i = m.length;
  while(i--){  
     if(m[i].name===val.name){
        if(m[i].level===val.level)
         {m.splice(i, 1)}
     }
  } 
}

function levelUp(val){ 
  if(val.level===1)
  {
     val.level += 1;
     val.hp    *= 2;    
     val.maxHp *= 2;
     val.damage *= 3;
     val.rangeR *= 1.1;
     val.atkSpeed *= 1.1; 
     val.r *= 1.1;
  }else
  {
     val.level += 1;
     val.hp    *= 2;  
     val.maxHp *= 2;
     val.damage *= 5;
     val.rangeR *= 1.2;
     val.atkSpeed *= 1.2; 
     val.r *= 1.2;
  }
}


function unique(val) {
        var arr = val;
        for (let i = 0; i < arr.length; i++) {
            for (let j = i + 1; j < arr.length; j++) {
                if (arr[i] == arr[j]) {
                    arr.splice(j, 1);
                    j--;
                }
            }
        }
        return arr;
    }
/**
 * 主界面里的逻辑
 */
function mainInterface() {
    let startBtn = document.querySelector(".startGame");
    let wikiBtn = document.querySelector(".wiki");
    let helpBtn = document.querySelector(".help");

    startBtn.addEventListener("click", () => {
        gotoPage("modeChoice-interface");
        choiceInterface();
    });

    wikiBtn.addEventListener("click", () => {
        gotoPage("wiki-interface");
        wikiInterface();
    });
    helpBtn.addEventListener("click", () => {
        gotoPage("help-interface");
        helpInterface();
    });
}

/**
 * 模式选择界面逻辑
 */
function choiceInterface() {
    let thisInterface = document.querySelector(".modeChoice-interface");
    // 简单
    thisInterface.querySelector(".endlessMode-easy").addEventListener("click", () => {
        gotoPage("war-interface");
        endlessMode("easy");
    });
    // 普通
    thisInterface.querySelector(".endlessMode-normal").addEventListener("click", () => {
        gotoPage("war-interface");
        endlessMode("normal");
    });
    // 困难
    thisInterface.querySelector(".endlessMode-hard").addEventListener("click", () => {
        gotoPage("war-interface");
        endlessMode("hard");
    });
    // 无尽
    thisInterface.querySelector(".infiniteTimeMode-hard").addEventListener("click", () => {
        gotoPage("war-interface");
        endlessMode("infinitehard");
    });

}

/**
 * 帮助界面逻辑
 */
function helpInterface() {
    let thisInterface = document.querySelector(".help-interface");
    thisInterface.querySelector(".backPage").addEventListener("click", () => {
        gotoPage("main-interface");
    });
}

/**
 * wiki 界面逻辑
 */
function wikiInterface() {
    let thisInterface = document.querySelector(".wiki-interface");
    thisInterface.querySelector(".monsterList").addEventListener("click", () => {
        gotoPage("monsters-interface");
        monstersInterface();
    });
    thisInterface.querySelector(".backPage").addEventListener("click", () => {
        gotoPage("main-interface");
    });
}


/**
 * 怪物大全界面逻辑
 */
function monstersInterface() {
    let thisInterface = document.querySelector(".monsters-interface");
    thisInterface.querySelector(".backPage").addEventListener("click", () => {
        gotoPage("wiki-interface");
    });
    let contentEle = thisInterface.querySelector(".content");
    let worldVoid = new World(100, 100);
    if (contentEle.children.length === 0) {
        for (let monster of MONSTERS_FUNC_ARR_ALL) {
            let monsterObj = monster(worldVoid);
            let monsterEle = document.createElement("div");
            monsterEle.classList.add("monster");

            let title = document.createElement("h3");
            title.innerText = monsterObj.name;
            monsterEle.appendChild(title);
            // 贴图
            let imgDiv = document.createElement("div");
            imgDiv.style.backgroundImage = `url('monster/imgs/monsters.png')`;
            imgDiv.style.width = MONSTER_IMG_PRE_WIDTH + "px";
            imgDiv.style.height = MONSTER_IMG_PRE_HEIGHT + "px";
            let diffPos = monsterObj.getImgStartPosByIndex(monsterObj.imgIndex);
            imgDiv.style.backgroundPositionX = -diffPos.x + "px";
            imgDiv.style.backgroundPositionY = -diffPos.y + "px";
            imgDiv.style.margin = "0 auto";
            monsterEle.appendChild(imgDiv);
            // 数据域
            let data = document.createElement("div");

            let line = document.createElement("p");
            line.innerText = `血量：${monsterObj.maxHp}`;
            data.appendChild(line);

            line = document.createElement("p");
            line.innerText = `奖金：${monsterObj.addPrice}`;
            data.appendChild(line);

            line = document.createElement("p");
            line.innerText = `碰撞伤害：${monsterObj.colishDamage}`;
            data.appendChild(line);

            line = document.createElement("p");
            line.innerText = `速度：${monsterObj.speedNumb}`;
            data.appendChild(line);

            line = document.createElement("p");
            line.innerText = `加速度：${monsterObj.accelerationV}`;
            data.appendChild(line);

            line = document.createElement("p");
            line.innerText = `介绍：${monsterObj.comment}`;
            data.appendChild(line);
            monsterEle.appendChild(data);

            contentEle.appendChild(monsterEle);
        }
    }
}

/**
 * 跳转到有类名的页面
 * @param className {String}
 */
function gotoPage(className) {
    for (let pageHTMLEle of interfaceArr) {
        if (pageHTMLEle.classList.contains(className)) {
            pageHTMLEle.style.display = "block";
        } else {
            pageHTMLEle.style.display = "none";
        }
    }
}

/**
 * 开启无尽模式
 * 前提条件是： war-interface 被打开
 * @param mode {String}
 * @param haveGroup {Boolean} 是否含有怪物波数，如果是false，则是无尽时间模式
 */
function endlessMode(mode, haveGroup = true) {
    /**
     * 当前页面
     * @type {HTMLDivElement}
     */
    let thisInterface = document.querySelector(".war-interface");
    /**
     * 画布元素
     * @type {HTMLCanvasElement}
     */
    let canvasEle = document.querySelector("#mainCanvas");
    /**
     * 右侧选择按钮
     * @type {HTMLElement}
     */
    let choiceBtn = document.querySelector(".choiceBtn");
    choiceBtn.style.display = "block";  // 把右侧选择按钮打开
    /**
     * 游戏暂停按钮
     * @type {Element}
     */
    let pauseBtn = document.querySelector(".pause");
    let isGamePause = false;
    let maxMonsterLevel = 0;
    pauseBtn.addEventListener("click", () => {
        isGamePause = !isGamePause;
        if (isGamePause) {
            pauseBtn.innerHTML = "开始";
        } else {
            pauseBtn.innerHTML = "暂停";
        }
    })

    let gameEnd = false;  // 游戏是否被迫结束
    /**
     * 返回按钮点击事件
     */

    // 背景音乐切换
    Sounds.switchBgm("war");

    let world = new World(canvasEle.width, canvasEle.height);
    world.resizeCanvas(canvasEle);
    if(mode != "infinitehard"){
        world.mode = mode;
    }else{
        world.mode = "hard";
    }
    if(mode==="easy")
    {
        maxMonsterLevel=20;
    }else if(mode==="normal")
    {
        maxMonsterLevel=40;
    }else if(mode==="hard")
    {
        maxMonsterLevel=60;
    }else{
        maxMonsterLevel=100;
    }
    
    /**
     * 开启游戏循环迭代
     */

    let mainAni = setInterval(() => {
        if((world.monsterFlow.level - 1) > maxMonsterLevel) {
            alert("胜利！！！！");
            location.reload();
            clearInterval(mainAni);
        }
        
        
        if (!isGamePause) {
            world.goTick();
        }
        world.render(canvasEle);
        if (gameEnd) {
            clearInterval(mainAni);
            return;
        }
        if (world.rootBuilding.isDead()) {
            alert("你失败了");
            location.reload();
            clearInterval(mainAni);
        }
    }, 25);

    let addedThingFunc = null;  // 当前准备添加到画布的东西  应该是一个构造器（函数）。
    let selectedThing = null; // 当前选中的东西
    let btnClassName = "towerBtn";
    let initBtnListClassName = "initPanel";  // 选择界面的初始面板 div类名
    let boxListClassName = "boxPanel";  // 选择界面的选择对象面板 div类名
    let smallLevelUpPanelEle = document.querySelector("#smallLevelUpPanel");  // 升级窗口的元素
    let changed= false;
    let priceB = Math.pow(world.mainLevel,3) * 5;
    
    /**
     * 显示初始化面板
     */
    function showInitPanel() {

        let panelEle = document.querySelector(`.${initBtnListClassName}`);
        if (panelEle.style.display === "block") {
            return;
        }
        panelEle.style.display = "block";
        panelEle.innerHTML = "";
        // 如果初始化面板里面还没有被填充内容，则就先填充内容
        if (panelEle.innerHTML === "") {
            let thingsFuncArr = [];  // 即将添加的按钮数组
            let pSix=0+Math.floor(world.mainLevel/5)*5;
            let pFive=0 +Math.floor(world.mainLevel/4)*5;
            let pFour=0 +Math.floor(world.mainLevel/3)*4;
            let pThree=5+Math.floor(world.mainLevel/2)*3;
            let pTwo= 10 +Math.floor(world.mainLevel)*2;
            let pOne= 100-pTwo-pThree-pFour-pFive-pSix;
            for(let i=0;i<6;i++){
                let random= Math.floor(Math.random()*100)+1; 
                if(random <= pOne) {
                    let select=Math.floor(Math.random()*6);
                    switch(select) {
                    case 0:
                        thingsFuncArr.push(TowerFinally.mage_1);
                        break;
                    case 1:        
                        thingsFuncArr.push(TowerFinally.warrior_1);
                        break;    
                    case 2:
                        thingsFuncArr.push(TowerFinally.thief_1);
                        break;    
                    case 3:        
                        thingsFuncArr.push(TowerFinally.archer_1);  
                        break;    
                    case 4:
                        thingsFuncArr.push(TowerFinally.heller_1);
                        break;    
                    case 5:        
                        thingsFuncArr.push(TowerFinally.knight_1);
                        break;    
                     }
                }else if(random <= (pOne + pTwo)){
                    let select=Math.floor(Math.random()*6);
                    switch(select) {
                    case 0:
                        thingsFuncArr.push(TowerFinally.mage_2);
                        break;        
                    case 1:        
                        thingsFuncArr.push(TowerFinally.warrior_2);
                        break;        
                    case 2:
                        thingsFuncArr.push(TowerFinally.thief_2);
                        break;        
                    case 3:        
                        thingsFuncArr.push(TowerFinally.archer_2); 
                        break;        
                    case 4:
                        thingsFuncArr.push(TowerFinally.heller_2);
                        break;       
                    case 5:        
                        thingsFuncArr.push(TowerFinally.knight_2);
                        break;        
                     }
                } else if(random <= (pOne + pTwo + pThree)){
                    let select=Math.floor(Math.random()*6);
                    switch(select) {
                    case 0:
                        thingsFuncArr.push(TowerFinally.mage_3);
                        break;        
                    case 1:        
                        thingsFuncArr.push(TowerFinally.warrior_3);
                        break;        
                    case 2:
                        thingsFuncArr.push(TowerFinally.thief_3);
                        break;        
                    case 3:        
                        thingsFuncArr.push(TowerFinally.archer_3);
                        break;        
                    case 4:
                        thingsFuncArr.push(TowerFinally.heller_3);
                        break;        
                    case 5:        
                        thingsFuncArr.push(TowerFinally.knight_3);
                        break;        
                     }
              }else if(random <= (pOne + pTwo + pThree + pFour)){
                    let select=Math.floor(Math.random()*6);
                    switch(select) {
                    case 0:
                        thingsFuncArr.push(TowerFinally.mage_4);
                        break;        
                    case 1:        
                        thingsFuncArr.push(TowerFinally.warrior_4);
                        break;        
                    case 2:
                        thingsFuncArr.push(TowerFinally.thief_4);
                        break;        
                    case 3:        
                        thingsFuncArr.push(TowerFinally.archer_4);     
                        break;        
                    case 4:
                        thingsFuncArr.push(TowerFinally.heller_4);
                        break;         
                    case 5:        
                        thingsFuncArr.push(TowerFinally.knight_4);
                        break;        
                     }
              }else if(random <= (pOne + pTwo + pThree + pFour + pFive)){
                    let select=Math.floor(Math.random()*6);
                    switch(select) {
                    case 0:
                        thingsFuncArr.push(TowerFinally.mage_5);
                        break;        
                    case 1:        
                        thingsFuncArr.push(TowerFinally.warrior_5);
                        break;        
                    case 2:
                        thingsFuncArr.push(TowerFinally.thief_5);
                        break;        
                    case 3:        
                        thingsFuncArr.push(TowerFinally.archer_5); 
                        break;        
                    case 4:
                        thingsFuncArr.push(TowerFinally.heller_5);
                        break;        
                    case 5:        
                        thingsFuncArr.push(TowerFinally.knight_5);
                        break;        
                     }
              }else{
                    let select=Math.floor(Math.random()*6);
                    switch(select) {
                    case 0:
                        thingsFuncArr.push(TowerFinally.mage_6);
                        break;        
                    case 1:        
                        thingsFuncArr.push(TowerFinally.warrior_6);
                        break;        
                    case 2:
                        thingsFuncArr.push(TowerFinally.thief_6);
                        break;        
                    case 3:        
                        thingsFuncArr.push(TowerFinally.archer_6); 
                        break;        
                    case 4:
                        thingsFuncArr.push(TowerFinally.heller_6);
                        break;        
                    case 5:        
                        thingsFuncArr.push(TowerFinally.knight_6);
                        break;        
                     }
                }
            }
          

            for (let bFunc of thingsFuncArr) {
                let btn = document.createElement('button');
                btn.classList.add(btnClassName);
                let b = bFunc(world);
                btn.innerHTML = b.name + `<br>${b.price}￥`;
                btn.classList.add(b.gameType);
                btn.setAttribute("data-price", b.price.toString());
                // 按钮点击后会把构造函数绑定在添加物品上
                btn.addEventListener("click", () => {
                  if(world.box.length<6){
                  world.user.money -= b.price;
                  world.box.push(b);
                  console.log(b);
                  btn.remove();
                  changed= true;    
                  }else{
                    alert("未放置英雄已满！");
                  }
                //addedThingFunc = bFunc;
                });
                panelEle.appendChild(btn);
            }
            // 刷新按钮
            let refreshB = document.createElement("button");
            refreshB.id = "refreshB";
            refreshB.innerText = "刷新/5";
            refreshB.addEventListener("click", () => {
                 world.user.money -= 5;
                 panelEle.style.display = "none";
                 showInitPanel();
                 changed= true;
            });
            initPanelSelect = false;
            panelEle.appendChild(refreshB);
            let priceB =  Math.pow(world.mainLevel,3) * 5;
            // 升本按钮
            let levelupB = document.createElement("button");
           
            levelupB.id = "levelupB";        
            levelupB.innerText = "升本并刷新"+ priceB ;
            levelupB.addEventListener("click", () => {
                 if(world.mainLevel===world.maxLevel)
                 {
                    alert("已经到达当前难度最大本数!");
                    return;
                 }
                 world.user.money -= priceB;
                 world.mainLevel ++;
                 panelEle.style.display = "none";
                 showInitPanel();
                 changed= true;
            });

            panelEle.appendChild(levelupB);
            
            // 测试按钮
            let test = document.createElement("button");
            test.id = "test";
            test.innerText = "测试";
            test.addEventListener("click", () => {
                world.user.money += 10000;
                for(let item of world.getAllBuildingArr())
                {
                   if(item.gameType === "Tower"){
                        item.maxHp += 10000;
                    }
                }
            });

            panelEle.appendChild(test);
            
        }
    }

let refreshPanel = setInterval(() => {
         if (addedThingFunc === null && selectedThing === null) {
             showInitPanel();
         } 
         if (gameEnd) {
             clearInterval(refreshPanel);
         }
     }, 100);

    /**
     * 更改右键行为
     * @param e
     * @returns {boolean}
     */
    document.oncontextmenu = function (e) {
        if (e.button === 2) { //判断是否是右键
            addedThingFunc = null;
            world.user.putLoc.building = null;
            return false;
        }
        return true;
    }

    /**
     * 显示背包面板
     */
    function showBoxPanel() {
       
        let panelBoxEle = document.querySelector(`.${boxListClassName}`);
        panelBoxEle.style.display = "block";
        panelBoxEle.innerHTML = "";
        // 如果初始化面板里面还没有被填充内容，则就先填充内容
        if (panelBoxEle.innerHTML === "") {     
            for (let bFunc of world.box) {
                if(getWordCnt(bFunc,world.box) === 3 && bFunc.level < 3){
                   deleteUnique(bFunc,world.box);
                   levelUp(bFunc);             
                   world.box.push(bFunc);
                   showBoxPanel();
                   return;
                }
                if((getWordCnt(bFunc,world.getAllBuildingArr())+getWordCnt(bFunc,world.box)) === 3 && bFunc.level < 3)
                    {
                        for(let item of world.getAllBuildingArr())
                          {
                           if (item.name ===bFunc.name && item.level ===bFunc.level )
                              {
                                  world.removeTower(item);
                              }
                          }
                        deleteUnique(bFunc,world.box);
                        levelUp(bFunc);             
                        world.box.push(bFunc);
                        showBoxPanel();
                        return;
                    }
                        
                let btn = document.createElement('button');
                btn.classList.add(btnClassName);
                let b = bFunc;
                btn.innerHTML = b.name + `<br>LV:${b.level}`;
                btn.classList.add(b.gameType);
                // 按钮点击后会把构造函数绑定在添加物品上
                btn.addEventListener("click", () => {
                addedThingFunc = bFunc;
                });
                panelBoxEle.appendChild(btn);
            }
        }
            // 取消选择按钮
            let cancelBtn = document.createElement("button");
            cancelBtn.innerText = "取消放置模式";
            cancelBtn.id = "cancelSelect";
            cancelBtn.addEventListener("click", () => {
                addedThingFunc = null;
                world.user.putLoc.building = null;
            });
            panelBoxEle.appendChild(cancelBtn);
            changed= false;
    }    
    
let refreshBoxPanel = setInterval(() => {
         if (changed===true) {
             showBoxPanel();
         } 
         if (gameEnd) {
             clearInterval(refreshBoxPanel);
         }
     }, 100);
    
   

    /**
     * 隐藏所有面板
     */
    function hideAllPanel() {
        for (let panelEle of choiceBtn.children) {
            panelEle.style.display = "none";
        }
    }

    /**
     * 升级面板鼠标离开事件
     */
    smallLevelUpPanelEle.addEventListener("mouseleave", () => {
        hideSmallLevelUpPanelEle();
    });

    /**
     * 隐藏小面板
     */
    function hideSmallLevelUpPanelEle() {
        smallLevelUpPanelEle.style.display = "none";
    }

    /**
     * 显示小升级面板
     * 引用外部变量：  smallLevelUpPanelEle  world
     * @param thing {Tower}  是什么建筑的
     * @param clickPos {Vector} 鼠标点击的位置
     */
    function showSmallLevelUpPanel(thing, clickPos) {
                // 弹出一个升级界面
        smallLevelUpPanelEle.style.display = "block";
        smallLevelUpPanelEle.style.left = clickPos.x + 10 + "px";
        smallLevelUpPanelEle.style.top = clickPos.y + 10 + "px";
        // 设置弹出界面里面的内容
        let nameSpan = smallLevelUpPanelEle.querySelector(".name");
        nameSpan.innerHTML = thing.name + "<br/>Lv" + thing.level + "<br/>伤害" + thing.damage + "<br/>攻速" + thing.atkSpeed + "<br/>攻击范围" + thing.rangeR + "<br/>攻击宽度" + thing.width+ "<br/>攻击长度" + thing.rayLen;
        let listEle = smallLevelUpPanelEle.querySelector(".levelUpItems");
        listEle.innerHTML = "";  // 先清空
        
        let otherItemsEle = smallLevelUpPanelEle.querySelector(".otherItems");
        otherItemsEle.innerHTML = ""; // 先清空
        // 设置出售项
        let saleDownEle = document.createElement("div");
        saleDownEle.classList.add("item");

        saleDownEle.classList.add("sell");
        let imgDiv = document.createElement("div");
        imgDiv.classList.add("icon");
        saleDownEle.appendChild(imgDiv);


        textDiv = document.createElement("div");
        textDiv.classList.add("inner-text");
        textDiv.innerHTML = `卖了<br>+${thing.price / 2}元`
        saleDownEle.appendChild(textDiv);
        saleDownEle.addEventListener("click", () => {
            // 卖了点击函数
            world.user.money += Math.floor(thing.price / 2);
            world.removeTower(thing);
            // 隐藏小面板
            hideSmallLevelUpPanelEle();
        });
        otherItemsEle.appendChild(saleDownEle);
    }

    /**
     * 点击画布放置炮塔
     * 点击画布选择升级炮塔
     * 点击画布选择怪物
     * @param e
     */
    canvasEle.onclick = function (e) {
        let clickPos = new Vector(e.clientX - canvasEle.offsetLeft, e.clientY - canvasEle.offsetTop);
        if (addedThingFunc === null) {
            // 手上没有炮塔
            // 检测点击的此处是否是炮塔或者建筑
            for (let item of world.getAllBuildingArr()) {
                if (item.getBodyCircle().pointIn(clickPos.x, clickPos.y)) {
                    // 这里有炮塔或者建筑
                    // selectedThing = item;
                    showSmallLevelUpPanel(item, clickPos);
                    item.selected = true;
                    return;
                }
            }
            // 检测点击的此处是否有怪物
            for (let item of world.monsters) {
                if (item.getBodyCircle().pointIn(clickPos.x, clickPos.y)) {
                    // 这里有怪物
                    selectedThing = item;
                    item.selected = true;
                    return;
                }
            }
            selectedThing = null;
            hideSmallLevelUpPanelEle();
        } else {
            // 手上有炮塔，放置炮塔
            let addedThing = addedThingFunc;
            addedThing.pos = clickPos;
            // 检测此处是否可以放建筑
            for (let item of world.getAllBuildingArr()) {
                if (addedThing.getBodyCircle().impact(item.getBodyCircle())) {
                    // 这里不可以放建筑
                    let et = new EffectText("这里不能放英雄，换一个地方点一下");
                    et.pos = addedThing.pos.copy();
                    world.addEffect(et);
                    return;
                }
            }
            if(world.getAllBuildingArr().length>= world.mainLevel+5){
            
               alert("已经放置当前本数最多英雄！");
               return;
            }
            
            
            // 可以放建筑
            switch (addedThing.gameType) {
                case "Tower":
                    world.addTower(addedThing);
                    world.box.remove(addedThingFunc);
                    addedThingFunc = null;
                    changed= true;  
                    if(getWordCnt(addedThing,world.getAllBuildingArr()) === 3 && addedThing.level < 3)
                    {
                        for(let item of world.getAllBuildingArr())
                          {
                           if (item.name ===addedThing.name && item.level ===addedThing.level )
                              {
                                  world.removeTower(item);
                              }
                          }
                        levelUp(addedThing);             
                        world.box.push(addedThing);
                    }
                    
                    break;
                case "Building":
                    world.addBuilding(addedThing);
                    break;
            }
        }
    }

    /**
     * 鼠标在画布上移动 更新准备放置的位置
     * @param e
     */
    canvasEle.onmousemove = function (e) {
        if (addedThingFunc === null) {
            return;
        }
        world.user.putLoc.building = addedThingFunc;
        world.user.putLoc.x = e.clientX - canvasEle.offsetLeft;
        world.user.putLoc.y = e.clientY - canvasEle.offsetTop;
    }


    /**
     * 时刻更新按钮状态
     * 让按钮是否可以点击，金钱限制
     * 更新是否取消放置的按钮
     */
    let freshBtn = setInterval(() => {
        world.jiban=world.jibanSelect();
        // 右侧塔楼列表
        let towerBtnArr = document.getElementsByClassName(btnClassName);
　　　　  let refreshBtn = document.getElementById("refreshB");
        let levelupBtn = document.getElementById("levelupB");
        let priceB =  Math.pow(world.mainLevel,3) * 5;
        if (world.user.money < priceB ) {
                levelupBtn.setAttribute("disabled", "disabled");
            }
            else {
                levelupBtn.removeAttribute("disabled");
            }

        if (world.user.money < 5) {
                refreshBtn.setAttribute("disabled", "disabled");
            }
            else {
                refreshBtn.removeAttribute("disabled");
           }
       
                
        
        for (let btn of towerBtnArr) {
            if (btn.dataset.price > world.user.money) {
                btn.setAttribute("disabled", "disabled");
            }
            else {
                btn.removeAttribute("disabled");
            }
        }
        // 游戏结束
        if (gameEnd) {
            clearInterval(freshBtn);
        }
        // 更新小面板可以放置 todo
        let itemArr = smallLevelUpPanelEle.getElementsByClassName("levelUpItem");
        for (let itemEle of itemArr) {
            if (itemEle.dataset.price <= world.user.money) {
                itemEle.removeAttribute("disabled");
                itemEle.style.opacity = "1";
            } else {
                itemEle.setAttribute("disabled", "disabled");
                itemEle.style.opacity = "0.2";
            }
        }
    }, 100);
    
 let hellForSix = setInterval(() => {
         if (world.hellForSix) {
              for(let item of world.getAllBuildingArr())
                {
                   if(item.hp < item.maxHp && item.gameType === "Tower" && !isGamePause){
                        item.hp += 2;
                    }
                }

         } 
     }, 100);   
    

 let hellForThree = setInterval(() => {
         if (world.hellForThree) {
              for(let item of world.getAllBuildingArr())
                {
                   if(item.hp < item.maxHp && item.gameType === "Tower" && !isGamePause){
                        item.hp += 1;
                    }
                }

         } 
     }, 100);  
    
 let archerForTwo = setInterval(() => {
         if (world.twoArcherBuff && !isGamePause ) {
             world.user.money += 1;

         } 
     }, 2000);   
    
let archerForfour = setInterval(() => {
         if (world.fourArcherBuff && !isGamePause) {
             world.user.money += 1;

         } 
     }, 2000);   
    
let archerForSix = setInterval(() => {
         if (world.sixArcherBuff && !isGamePause) {
             world.user.money += 1;

         } 
     }, 2000);   

}
