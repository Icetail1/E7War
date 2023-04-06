/**
 * 返回一些最终建筑
 * by littlefean
 */
class TowerFinally {
    /**
     *
     * @param world {World}
     * @returns {Tower}
     */

    static witcher_1(world) {
        let b = new TowerRay(0, 0, world);
        b.name = "法师☆";

        b.hpInit(5000);
        b.rangeR = 150;
        b.r += 1;
        b.rayMoveSpeed = 10;
        b.rayMaxRange = 200;
        b.rayClock = 10;
        b.rayNum = 1;
        b.rayDeviationRotate = 0;
        b.damage = 15;
        b.rayThrowAble = false;
        b.attackFunc = b.shootingAttack;
        b.rayLen = 15;  // 射线的长度
        b.rayWidth = 2;
        b.rayColor = new MyColor(69, 214, 165, 1);
        b.classType = "witcher";
        b.price = 800;
        b.imgIndex = 50;
        b.level = 1;
        b.comment = "想要获取更强大的激光、闪电等等的高科技武器，就要从此处升级开始，该高科技炮塔会发射激光粒子子弹";
        b.audioSrcString = "sound/发射音效/高科技塔发射.mp3";
        return b;
    }

    static  warrior_1(world) {
        let res = new TowerBoomerang(0, 0, world);
        res.name = "战士☆";
        res.hpInit(3000);
        res.damage = 100;
        res.rangeR = 120;
        res.r += 2;
        res.bar = res.initBar();
        res.imgIndex = 2;
        res.price = 190;
        res.comment = "一种威力不小的攻击东西，回旋镖能够穿过敌人，对所有穿过的敌人造成伤害";
        return res;
    }


    static thief_1(world) {
        let b = new TowerRay(0, 0, world);
        b.name = "刺客☆"
        b.r += 5;
        b.rayMoveSpeed = 8;
        b.rayMaxRange = 300;

        b.rayClock = 50;
        b.rayLen = 30;  // 射线的长度
        b.rayColor = new MyColor(103, 150, 138, 0.5);
        b.rayWidth = 10;
        b.rayRepel = 0.1;
        b.hpInit(4000);
        b.rangeR = 120;
        b.attackFunc = b.gerAttack;
        b.levelDownGetter = TowerFinally.TraditionalCannon_Middle;
        b.levelUpArr = [TowerFinally.AirCannon_2];
        b.imgIndex = 30;
        b.price = 300;
        b.comment =  `发射出一个空气波，这个空气波对怪物具有击退作用`;
        return b;
    }
    static archer_1(world) {
        let res = new TowerBoomerang(0, 0, world);
        res.name = "弓手☆";
        res.hpInit(3000);
        res.damage = 250;
        res.rangeR = 100;
        res.barWidth = 10;
        res.barLen = 20;
        res.r += 2;
        res.barRotateSelfSpeed = 0.2;
        res.bar = res.initBar();
        res.imgIndex = 2;
        res.price = 300;
        res.comment = "相对于普通的回旋镖，距离虽然没那么远了，但是伤害更大了，回旋镖也更大更强了";
        return res;
    }
    static knight_1(world) {
        let b = new TowerRay(0, 0, world);
        b.name = "骑士☆"
        b.r += 7;

        b.rangeR = 250;
        b.rayLen = 300;
        b.rayClock = 10;
        b.rayWidth = 5;
        b.damage = 100;
        b.hpInit(10000);
        b.rayColor = new MyColor(255, 0, 0, 1);
        b.imgIndex = 57;
        b.price = 800;
        b.comment = `绿色激光是一种高频激光，蓝色激光是一种低频高伤害激光，而红色激光是一种大范围群体伤害激光，能够穿射`
        return b;
    }

    static heller_1(world) {
        let b = new TowerRay(0, 0, world);
        b.name = "奶妈☆"
        b.r += 8;
        b.damage = 50;
        b.rangeR = 0;
        b.rayLen = 300;
        b.rayWidth = 2;
        b.hpInit(10000);
        b.rayColor = new MyColor(255, 0, 0, 1);
        b.attackFunc = b.scanningAttack;
        b.imgIndex = 57;
        b.price = 600;
        b.comment = `激光不再有固定的目标，开始直接旋转扫射，只要被激光扫到，就会受到伤害`
        return b;
    }
    static witcher_2(world) {
        let b = new TowerRay(0, 0, world);
        b.name = "法师☆☆";

        b.hpInit(5000);
        b.rangeR = 150;
        b.r += 1;
        b.rayMoveSpeed = 10;
        b.rayMaxRange = 200;
        b.rayClock = 10;
        b.rayNum = 1;
        b.rayDeviationRotate = 0;
        b.damage = 15;
        b.rayThrowAble = false;
        b.attackFunc = b.shootingAttack;
        b.rayLen = 15;  // 射线的长度
        b.rayWidth = 2;
        b.rayColor = new MyColor(69, 214, 165, 1);
        b.classType = "witcher";
        b.price = 800;
        b.imgIndex = 50;
        b.level = 1;
        b.comment = "想要获取更强大的激光、闪电等等的高科技武器，就要从此处升级开始，该高科技炮塔会发射激光粒子子弹";
        b.audioSrcString = "sound/发射音效/高科技塔发射.mp3";
        return b;
    }

    static  warrior_2(world) {
        let res = new TowerBoomerang(0, 0, world);
        res.name = "战士☆☆";
        res.hpInit(3000);
        res.damage = 100;
        res.rangeR = 120;
        res.r += 2;
        res.bar = res.initBar();
        res.imgIndex = 2;
        res.price = 190;
        res.comment = "一种威力不小的攻击东西，回旋镖能够穿过敌人，对所有穿过的敌人造成伤害";
        return res;
    }


    static thief_2(world) {
        let b = new TowerRay(0, 0, world);
        b.name = "刺客☆☆"
        b.r += 5;
        b.rayMoveSpeed = 8;
        b.rayMaxRange = 300;

        b.rayClock = 50;
        b.rayLen = 30;  // 射线的长度
        b.rayColor = new MyColor(103, 150, 138, 0.5);
        b.rayWidth = 10;
        b.rayRepel = 0.1;
        b.hpInit(4000);
        b.rangeR = 120;
        b.attackFunc = b.gerAttack;
        b.levelDownGetter = TowerFinally.TraditionalCannon_Middle;
        b.levelUpArr = [TowerFinally.AirCannon_2];
        b.imgIndex = 30;
        b.price = 300;
        b.comment =  `发射出一个空气波，这个空气波对怪物具有击退作用`;
        return b;
    }
    static archer_2(world) {
        let res = new TowerBoomerang(0, 0, world);
        res.name = "弓手☆☆";
        res.hpInit(3000);
        res.damage = 250;
        res.rangeR = 100;
        res.barWidth = 10;
        res.barLen = 20;
        res.r += 2;
        res.barRotateSelfSpeed = 0.2;
        res.bar = res.initBar();
        res.imgIndex = 2;
        res.price = 300;
        res.comment = "相对于普通的回旋镖，距离虽然没那么远了，但是伤害更大了，回旋镖也更大更强了";
        return res;
    }
    static knight_2(world) {
        let b = new TowerRay(0, 0, world);
        b.name = "骑士☆☆"
        b.r += 7;

        b.rangeR = 250;
        b.rayLen = 300;
        b.rayClock = 10;
        b.rayWidth = 5;
        b.damage = 100;
        b.hpInit(10000);
        b.rayColor = new MyColor(255, 0, 0, 1);
        b.imgIndex = 57;
        b.price = 800;
        b.comment = `绿色激光是一种高频激光，蓝色激光是一种低频高伤害激光，而红色激光是一种大范围群体伤害激光，能够穿射`
        return b;
    }

    static heller_2(world) {
        let b = new TowerRay(0, 0, world);
        b.name = "奶妈☆☆"
        b.r += 8;
        b.damage = 50;
        b.rangeR = 0;
        b.rayLen = 300;
        b.rayWidth = 2;
        b.hpInit(10000);
        b.rayColor = new MyColor(255, 0, 0, 1);
        b.attackFunc = b.scanningAttack;
        b.imgIndex = 57;
        b.price = 600;
        b.comment = `激光不再有固定的目标，开始直接旋转扫射，只要被激光扫到，就会受到伤害`
        return b;
    }
    static witcher_3(world) {
        let b = new TowerRay(0, 0, world);
        b.name = "法师☆☆☆";

        b.hpInit(5000);
        b.rangeR = 150;
        b.r += 1;
        b.rayMoveSpeed = 10;
        b.rayMaxRange = 200;
        b.rayClock = 10;
        b.rayNum = 1;
        b.rayDeviationRotate = 0;
        b.damage = 15;
        b.rayThrowAble = false;
        b.attackFunc = b.shootingAttack;
        b.rayLen = 15;  // 射线的长度
        b.rayWidth = 2;
        b.rayColor = new MyColor(69, 214, 165, 1);
        b.classType = "witcher";
        b.price = 800;
        b.imgIndex = 50;
        b.level = 1;
        b.comment = "想要获取更强大的激光、闪电等等的高科技武器，就要从此处升级开始，该高科技炮塔会发射激光粒子子弹";
        b.audioSrcString = "sound/发射音效/高科技塔发射.mp3";
        return b;
    }

    static  warrior_3(world) {
        let res = new TowerBoomerang(0, 0, world);
        res.name = "战士☆☆☆";
        res.hpInit(3000);
        res.damage = 100;
        res.rangeR = 120;
        res.r += 2;
        res.bar = res.initBar();
        res.imgIndex = 2;
        res.price = 190;
        res.comment = "一种威力不小的攻击东西，回旋镖能够穿过敌人，对所有穿过的敌人造成伤害";
        return res;
    }


    static thief_3(world) {
        let b = new TowerRay(0, 0, world);
        b.name = "刺客☆☆☆"
        b.r += 5;
        b.rayMoveSpeed = 8;
        b.rayMaxRange = 300;

        b.rayClock = 50;
        b.rayLen = 30;  // 射线的长度
        b.rayColor = new MyColor(103, 150, 138, 0.5);
        b.rayWidth = 10;
        b.rayRepel = 0.1;
        b.hpInit(4000);
        b.rangeR = 120;
        b.attackFunc = b.gerAttack;
        b.levelDownGetter = TowerFinally.TraditionalCannon_Middle;
        b.levelUpArr = [TowerFinally.AirCannon_2];
        b.imgIndex = 30;
        b.price = 300;
        b.comment =  `发射出一个空气波，这个空气波对怪物具有击退作用`;
        return b;
    }
    static archer_3(world) {
        let res = new TowerBoomerang(0, 0, world);
        res.name = "弓手☆☆☆";
        res.hpInit(3000);
        res.damage = 250;
        res.rangeR = 100;
        res.barWidth = 10;
        res.barLen = 20;
        res.r += 2;
        res.barRotateSelfSpeed = 0.2;
        res.bar = res.initBar();
        res.imgIndex = 2;
        res.price = 300;
        res.comment = "相对于普通的回旋镖，距离虽然没那么远了，但是伤害更大了，回旋镖也更大更强了";
        return res;
    }
    static knight_3(world) {
        let b = new TowerRay(0, 0, world);
        b.name = "骑士☆☆☆"
        b.r += 7;

        b.rangeR = 250;
        b.rayLen = 300;
        b.rayClock = 10;
        b.rayWidth = 5;
        b.damage = 100;
        b.hpInit(10000);
        b.rayColor = new MyColor(255, 0, 0, 1);
        b.imgIndex = 57;
        b.price = 800;
        b.comment = `绿色激光是一种高频激光，蓝色激光是一种低频高伤害激光，而红色激光是一种大范围群体伤害激光，能够穿射`
        return b;
    }

    static heller_3(world) {
        let b = new TowerRay(0, 0, world);
        b.name = "奶妈☆☆☆"
        b.r += 8;
        b.damage = 50;
        b.rangeR = 0;
        b.rayLen = 300;
        b.rayWidth = 2;
        b.hpInit(10000);
        b.rayColor = new MyColor(255, 0, 0, 1);
        b.attackFunc = b.scanningAttack;
        b.imgIndex = 57;
        b.price = 600;
        b.comment = `激光不再有固定的目标，开始直接旋转扫射，只要被激光扫到，就会受到伤害`
        return b;
    }


}

const TOWER_FUNC_ARR = [

    TowerFinally.witcher_1,
    TowerFinally.warrior_1,
    TowerFinally.thief_1,
    TowerFinally.archer_1,
    TowerFinally.heller_1,
    TowerFinally.knight_1
];

const TOWERS_IMG = new Image();
TOWERS_IMG.src = "towers/imgs/towers.png";
const TOWER_IMG_WIDTH = 1000;
const TOWER_IMG_HEIGHT = 1000;
const TOWER_IMG_PRE_WIDTH = 100;
const TOWER_IMG_PRE_HEIGHT = 100;
