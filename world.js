/**
 *
 * by littlefean
 */
class World {

    /**
     *
     * @param width {Number}
     * @param height {Number}
     */
    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.batterys = [];
        this.buildings = [];
        this.box = [];
        this.monsters = new Set();
        this.effects = new Set();  // 特效层
        this.othersBullys = [];  // 多余的子弹，比如子弹分裂后的子弹
        this.time = 0;
        this.mainLevel = 1;
        this.mode = "normal";
        this.hellForThree = false;
        this.hellForSix = false;
        // 安置大本
        let RootBuilding = BuildingFinally.Root(this);
        RootBuilding.pos = new Vector(this.width / 2, this.height / 2);
        this.rootBuilding = RootBuilding; // 大本建筑 （特殊）
        this.addBuilding(this.rootBuilding);

        this.user = {
            money: 10,
            putLoc: {x: 0, y: 0, able: false, building: null}
        };

        // 当前怪物流信息
        this.monsterFlow = MonsterGroup.getMonsterFlow(this, 1, this.mode);
        this.monsterFlowNext = MonsterGroup.getMonsterFlow(this, 2, this.mode);
        // 非怪物流模式信息
        this.haveFlow = true;  // 一般是有怪物流的，若想取消怪物流，这个需要改成没有
        this.monsterAddFreezeTick = 200;
        this.monsterPreAdd = 3;  // 每次增加多少个怪物
        this.maxMonsterNum = 250;  // 最多怪物数量
        this.maxLevel=10;// 最大本数
        this.jiban="";

    }

    resizeCanvas(canvasElement) {
        canvasElement.width = this.width * PR;
        canvasElement.height = this.height * PR;
        canvasElement.style.width = this.width + "px";
        canvasElement.style.height = this.height + "px";
        // this.ctx.translate(0.5 * PR, 0.5 * PR);
    }

    /**
     * 获取我方所有实体
     */
    getAllBuildingArr() {
        let res = [];
        for (let item of this.buildings) {
            res.push(item);
        }
        for (let item of this.batterys) {
            res.push(item);
        }
        return res;
    }

    /**
     * 获取我方所有子弹，返回一个数组
     */
    getAllBullyToArr() {
        let res = [];
        for (let tower of this.batterys) {
            for (let b of tower.bullys) {
                res.push(b);
            }
        }
        for (let b of this.othersBullys) {
            res.push(b);
        }
        return res;
    }

    addTower(battery) {
        this.batterys.push(battery);
    }
    
    removeTower(battery){
        this.batterys.remove(battery);
    }

    /**
     * 往世界中添加一个怪物
     * @param monster {Monster}
     */
    addMonster(monster) {
        this.monsters.add(monster);
    }

    addEffect(effect) {
        this.effects.add(effect);
    }
    countClassType(classType){
        let cnt=0;
        let itemname=[];
        for(let item of this.batterys)
        {
           if(item.classType===classType &&  itemname.indexOf(item.name)=== -1 ){
               cnt++;
               itemname.push(item.name);
           }
        }
        return cnt;
    }
    
    jibanSelect(){
         
         let jibanR="";
         if(this.countClassType("knight") >= 3){
            jibanR+="三骑士";
            for(let item of this.batterys)
            {
                if(!item.threeKnightBuff){
                    item.maxHp*=2;
                    item.Hp*=2;
                    item.threeKnightBuff = true;
                }
            }
           }else{
              for(let item of this.batterys)
            {
                if(item.threeKnightBuff){
                    item.maxHp/=2;
                    item.Hp*=2;
                    item.threeKnightBuff = false;
                }
            } 
         }
        
         if(this.countClassType("knight") >= 6){
            jibanR+="六骑士";
            for(let item of this.batterys)
            {
                if(!item.sixKnightBuff){
                    item.maxHp*=2;
                    item.Hp*=2;
                    item.sixKnightBuff = true;
                }
            }
           }else{
              for(let item of this.batterys)
            {
                if(item.sixKnightBuff){
                    item.maxHp/=2;
                    item.Hp/=2;
                    item.sixKnightBuff = false;
                }
            } 
         }
        
        
         if(this.countClassType("warrior") >= 2){
            jibanR+="二战士";
            for(let item of this.batterys)
            {
                if(!item.twoWarriorBuff ){
                    item.damage*=2;
                    item.twoWarriorBuff = true;
                }
            }
           }else{
              for(let item of this.batterys)
            {
                if(item.twoWarriorBuff ){
                    item.damage/=2;
                    item.twoWarriorBuff = false;
                }
            } 
         }
        
         if(this.countClassType("warrior") >= 4){
            jibanR+="四战士";
            for(let item of this.batterys)
            {
                if(!item.fourWarriorrBuff  ){
                    item.damage*=2;
                    item.fourWarriorrBuff  = true;
                }
            }
           }else{
              for(let item of this.batterys)
            {
                if(item.fourWarriorrBuff  ){
                    item.damage/=2;
                    item.fourWarriorrBuff  = false;
                }
            } 
         }      
        
         if(this.countClassType("warrior") >= 6){
            jibanR+="六战士";
            for(let item of this.batterys)
            {
                if(!item.sixWarriorrBuff  ){
                    item.damage*=2;
                    item.sixWarriorrBuff  = true;
                }
            }
           }else{
              for(let item of this.batterys)
            {
                if(item.sixWarriorrBuff  ){
                    item.damage/=2;
                    item.sixWarriorrBuff  = false;
                }
            } 
         }         
        
        
         if(this.countClassType("mage") >= 2){
            jibanR+="二法师";
            for(let item of this.batterys)
            {
                if(!item.twoMageBuff  ){
                    item.rangeR*=1.2;
                    item.twoMageBuff  = true;
                }
            }
           }else{
              for(let item of this.batterys)
            {
                if(item.twoMageBuff  ){
                    item.rangeR/=1.2;
                    item.twoMageBuff = false;
                }
            } 
         }
        
         if(this.countClassType("mage") >= 4){
            jibanR+="四法师";
            for(let item of this.batterys)
            {
                if(!item.fourMageBuff   ){
                    item.rangeR*=1.2;
                    item.fourMageBuff   = true;
                }
            }
           }else{
              for(let item of this.batterys)
            {
                if(item.fourMageBuff   ){
                    item.rangeR/=1.2;
                    item.fourMageBuff   = false;
                }
            } 
         }      
        
         if(this.countClassType("mage") >= 6){
            jibanR+="六法师";
            for(let item of this.batterys)
            {
                if(!item.sixMageBuff   ){
                    item.rangeR*=1.3;
                    item.sixMageBuff   = true;
                }
            }
           }else{
              for(let item of this.batterys)
            {
                if(item.sixMageBuff   ){
                    item.rangeR/=1.3;
                    item.sixMageBuff   = false;
                }
            } 
         } 
        
         if(this.countClassType("thief") >= 2){
            jibanR+="二盗贼";
            for(let item of this.batterys)
            {
                if(!item.twoThiefBuff   ){
                    item.atkSpeed*=2;
                    item.twoThiefBuff  = true;
                }
            }
           }else{
              for(let item of this.batterys)
            {
                if(item.twoThiefBuff  ){
                    item.atkSpeed/=2;
                    item.twoThiefBuff = false;
                }
            } 
         }
        
         if(this.countClassType("thief") >= 4){
            jibanR+="四盗贼";
            for(let item of this.batterys)
            {
                if(!item.fourThiefBuff    ){
                    item.atkSpeed*=2;
                    item.fourThiefBuff    = true;
                }
            }
           }else{
              for(let item of this.batterys)
            {
                if(item.fourThiefBuff    ){
                    item.atkSpeed/=2;
                    item.fourThiefBuff    = false;
                }
            } 
         }      
        
         if(this.countClassType("thief") >= 6){
            jibanR+="六盗贼";
            for(let item of this.batterys)
            {
                if(!item.sixThiefBuff    ){
                    item.atkSpeed*=2;
                    item.sixThiefBuff    = true;
                }
            }
           }else{
              for(let item of this.batterys)
            {
                if(item.sixThiefBuff    ){
                    item.atkSpeed/=2;
                    item.sixThiefBuff    = false;
                }
            } 
         } 
        
         if(this.countClassType("archer") >= 2){
            jibanR+="二弓";
            for(let item of this.batterys)
            {
                if(!item.twoArcherBuff    ){
                    item.width*=2;
                    item.rayLen*=2;
                    item.twoArcherBuff   = true;
                }
            }
           }else{
              for(let item of this.batterys)
            {
                if(item.twoArcherBuff ){
                    item.width/=2;
                    item.rayLen/=2;
                    item.twoArcherBuff = false;
                }
            } 
         }
        
         if(this.countClassType("archer") >= 4){
            jibanR+="四弓";
            for(let item of this.batterys)
            {
                if(!item.fourArcherBuff ){
                    item.width*=2;
                    item.rayLen*=2;
                    item.fourArcherBuff  = true;
                }
            }
           }else{
              for(let item of this.batterys)
            {
                if(item.fourArcherBuff ){
                    item.width/=2;
                    item.rayLen/=2;
                    item.fourArcherBuff  = false;
                }
            } 
         }      
        
         if(this.countClassType("archer") >= 6){
            jibanR+="六弓";
            for(let item of this.batterys)
            {
                if(!item.sixArcherBuff){
                    item.width*=2;
                    item.rayLen*=2;
                    item.sixArcherBuff  = true;
                }
            }
           }else{
              for(let item of this.batterys)
            {
                if(item.sixArcherBuff){
                    item.width/=2;
                    item.rayLen/=2;
                    item.sixArcherBuff = false;
                }
            } 
         }            
         if(this.countClassType("heller") >= 3){
            jibanR+="六奶";
            this.hellForThree=true;
           }else{
            this.hellForThree=false;
         }        
         if(this.countClassType("heller") >= 6){
            jibanR+="六奶";
            this.hellForSix=true;
           }else{
            this.hellForSix=false;
         }  
         
         if(jibanR===""){
            jibanR="无羁绊"  ;
         }
         return jibanR;
        
    }
    /**
     *
     * @param building {Building}
     */
    addBuilding(building) {
        this.buildings.push(building);
    }

    goTick() {
        // 清除独立子弹
        let pArr = [];
        for (let p of this.othersBullys) {
            if (!p.isOutScreen()) {
                pArr.push(p);
            }
        }
        this.othersBullys = pArr;
        // 清除炮塔
        let tArr = [];
        for (let t of this.batterys) {
            if (!t.isDead()) {
                tArr.push(t);
            } else {
                let e = new EffectCircle(t.pos);
                e.animationFunc = e.destroyAnimation;
                this.addEffect(e);
            }
        }
        this.batterys = tArr;
        // 清除建筑
        let bArr = [];
        for (let b of this.buildings) {
            if (!b.isDead()) {
                bArr.push(b);
            }
        }
        this.buildings = bArr;
        // 清除特效
        for (let e of this.effects) {
            if (!e.isPlay) {
                this.effects.delete(e);
            }
        }
        // 添加怪物流
        this.worldAddMonster();
        // 炮塔行动
        for (let b of this.batterys) {
            b.goStep();
        }
        // 独立子弹行动
        for (let p of this.othersBullys) {
            p.goStep();
        }
        // 建筑行动
        for (let b of this.buildings) {
            b.goStep();
        }
        // 怪物行动
        for (let m of this.monsters) {
            m.goStep();
        }
        // 特效步进
        for (let e of this.effects) {
            e.goStep();
        }
        this.time++;
    }

    /**
     * 以这个世界自己的情况来添加怪物
     */
    worldAddMonster() {
        if (this.haveFlow) {
            // 以怪物流的方式添加怪物
            if (this.monsterFlow.couldBegin()) {
                this.monsterFlow.addToWorld(this.mode);

                this.monsterFlow = this.monsterFlowNext.copySelf();
                this.monsterFlowNext = MonsterGroup.getMonsterFlow(this,
                    this.monsterFlowNext.level + 1, this.mode);
            }
            if (this.monsterFlow.delayTick === 200 - 1) {
                // 添加文字提醒
                let et = new EffectText(`第 ${this.monsterFlow.level} 波即将到来！`);
                et.textSize = 40;
                et.duration = 100;
                et.pos = new Vector(this.width / 2, this.height / 2);
                this.addEffect(et);
                // 添加声音提醒
                Sounds.playNewMonsterFlow();
            }
        } else {
            // 随机添加怪物
            if (this.time % this.monsterAddFreezeTick !== 0) {
                return;
            }

            let monsterPreAddAdd;
            if (this.mode === "easy") {
                monsterPreAddAdd = Functions.tickAddMonsterNumEasy(this.time);
            } else {
                monsterPreAddAdd = Functions.tickAddMonsterNumHard(this.time);
            }
            if (this.time % 5000 === 0 && this.time !== 0) {
                let m = MonsterFinally.T800(this);
                for (let i = 0; i < Functions.levelT800Count(this.time / 500); i++) {
                    this.monsters.add(m);
                }
                return;
            }
            for (let i = 0; i < this.monsterPreAdd + monsterPreAddAdd; i++) {
                let choice = (arr) => {
                    return arr[Math.floor(Math.random() * arr.length)];
                };
                let m = choice(MonsterAllArr)(this);
                if (this.mode === "easy") {
                    m = choice(MonsterEasyArr)(this);
                    m.hpInit(m.maxHp + Functions.levelMonsterHpAddedEasy(this.monsterFlow.level - 1));
                    m.addPrice += Functions.levelAddPrice(this.monsterFlow.level - 1);
                } else if (this.mode === "normal") {
                    m.hpInit(m.maxHp + Functions.levelMonsterHpAddedNormal(this.monsterFlow.level - 1));
                    m.colishDamage += Functions.levelCollideAdded(this.time / 500);
                    m.addPrice += Functions.levelAddPriceNormal(this.monsterFlow.level - 1);
                } else if (this.mode === "hard") {
                    if (this.time < 5000) {
                        m = choice(Monster10BeforeArr)(this);
                    }

                    m.hpInit(m.maxHp + Functions.levelMonsterHpAddedHard(this.monsterFlow.level - 1));
                    m.colishDamage += Functions.levelCollideAddedHard(this.time / 500);
                    m.addPrice += Functions.levelAddPriceHard(this.monsterFlow.level - 1);
                }
                this.monsters.add(m);
            }
        }

    }

    /**
     *
     * @param canvasEle {Element}
     */
    render(canvasEle) {
        let canvasElement = document.querySelector("canvas");
        let ctx = canvasElement.getContext("2d");
        ctx.clearRect(0, 0, standardize(this.width), standardize(this.height));

        for (let b of this.batterys) {
            b.render(ctx);
        }
        for (let b of this.othersBullys) {
            b.render(ctx);
        }
        for (let b of this.buildings) {
            b.render(ctx);
        }
        for (let m of this.monsters) {
            m.render(ctx);
        }
        for (let e of this.effects) {
            e.render(ctx);
        }
        // 渲染即将放置的位置
        if (this.user.putLoc.building !== null && this.user.putLoc.building !== undefined) {
            let x = this.user.putLoc.x;
            let y = this.user.putLoc.y;
            let body = new Circle(x, y, this.user.putLoc.building.r);
            body.renderView(ctx);

            new Circle(x, y, this.user.putLoc.building.rangeR).renderView(ctx);
        }

        // 写一些基本信息
        ctx.font = "16px Microsoft YaHei";
        ctx.fillStyle = "black";
        ctx.textAlign = "left";
        ctx.fillText("当前本数：" + this.mainLevel, 20, 20);
        ctx.fillText("金钱：" + this.user.money.toString(), 20, 40);
        ctx.fillText("怪物数量：" + this.monsters.size, 20, 60);
        ctx.fillText("炮塔数量：" + this.batterys.length, 20, 80);
        ctx.fillText("炮塔数量：" + this.batterys.length, 20, 80);
        ctx.fillText("下一波：" + this.monsterFlow.toString(), 20, 100);
        ctx.fillText("当前波数：" + (this.monsterFlow.level - 1), 20, 120);
        ctx.fillText("倒计时：" + (this.monsterFlow.delayTick), 20, 140);
        ctx.fillText("羁绊：" + (this.jiban), 20, 160);
    }
}
