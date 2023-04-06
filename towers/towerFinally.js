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

    static FutureCannon_1(world) {
        let b = new TowerRay(0, 0, world);
        b.name = "高科技炮塔";

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
        b.classType = "archer";
        b.threeKnightBuff = false;
        b.levelDownGetter = TowerFinally.BasicCannon;
        b.levelUpArr = [
            TowerFinally.FutureCannon_2,
            TowerFinally.Thunder_1,
            TowerFinally.Laser,
        ];
        b.price = 800;
        b.imgIndex = 50;
        b.level = 1;
        b.comment = "想要获取更强大的激光、闪电等等的高科技武器，就要从此处升级开始，该高科技炮塔会发射激光粒子子弹";
        b.audioSrcString = "sound/发射音效/高科技塔发射.mp3";
        return b;
    }

    /**
     *  中世纪塔部分-------------
     */

    static Boomerang(world) {
        let res = new TowerBoomerang(0, 0, world);
        res.name = "回旋镖";
        res.hpInit(3000);
        res.damage = 100;
        res.rangeR = 120;
        res.r += 2;
        res.bar = res.initBar();
        res.levelUpArr = [TowerFinally.Boomerang_Far_1, TowerFinally.Boomerang_Power_1];
        res.levelDownGetter = TowerFinally.AncientCannon;
        res.imgIndex = 2;
        res.price = 190;
        res.comment = "一种威力不小的攻击东西，回旋镖能够穿过敌人，对所有穿过的敌人造成伤害";
        return res;
    }

    static Boomerang_Far_1(world) {
        let res = new TowerBoomerang(0, 0, world);
        res.name = "远程回旋镖1级";
        res.r += 3;
        res.hpInit(6000);
        res.damage = 100;
        res.rangeR = 140;
        res.barRotateSelfSpeed = 0.6;
        res.bar = res.initBar();
        res.levelUpArr = [TowerFinally.Boomerang_Far_2];
        res.levelDownGetter = TowerFinally.Boomerang;
        res.imgIndex = 2;
        res.price = 230;
        res.comment = "回旋镖的距离更远了";
        return res;
    }

    static Boomerang_Far_2(world) {
        let res = new TowerBoomerang(0, 0, world);
        res.name = "远程回旋镖2级";
        res.r += 4;
        res.hpInit(6000);
        res.damage = 100;
        res.rangeR = 160;
        res.barWidth = 10;
        res.barRotateSelfSpeed = 0.7;
        res.bar = res.initBar();
        res.levelUpArr = [TowerFinally.Boomerang_Far_3];
        res.levelDownGetter = TowerFinally.Boomerang_Far_1;
        res.imgIndex = 2;
        res.price = 350;
        res.comment = "距离又远了";
        return res;
    }

    static Boomerang_Far_3(world) {
        let res = new TowerBoomerang(0, 0, world);
        res.name = "远程回旋镖3级";
        res.r += 5;
        res.hpInit(6000);
        res.damage = 120;
        res.rangeR = 200;
        res.barWidth = 10;
        res.barRotateSelfSpeed = 0.8;
        res.bar = res.initBar();
        res.levelUpArr = [];
        res.levelDownGetter = TowerFinally.Boomerang_Far_2;
        res.imgIndex = 2;
        res.price = 300;
        res.comment = "距离又又又远了";
        return res;
    }

    static Boomerang_Power_1(world) {
        let res = new TowerBoomerang(0, 0, world);
        res.name = "力量回旋镖1级";
        res.hpInit(3000);
        res.damage = 250;
        res.rangeR = 100;
        res.barWidth = 10;
        res.barLen = 20;
        res.r += 2;
        res.barRotateSelfSpeed = 0.2;
        res.bar = res.initBar();
        res.levelUpArr = [TowerFinally.Boomerang_Power_2];
        res.levelDownGetter = TowerFinally.Boomerang;
        res.imgIndex = 2;
        res.price = 300;
        res.comment = "相对于普通的回旋镖，距离虽然没那么远了，但是伤害更大了，回旋镖也更大更强了";
        return res;
    }

    static Boomerang_Power_2(world) {
        let res = new TowerBoomerang(0, 0, world);
        res.name = "力量回旋镖2级";
        res.hpInit(5000);
        res.damage = 500;
        res.rangeR = 100;
        res.barWidth = 15;
        res.barLen = 30;
        res.r += 3;
        res.barRotateSelfSpeed = 0.1;
        res.bar = res.initBar();
        res.levelUpArr = [TowerFinally.Boomerang_Power_3];
        res.levelDownGetter = TowerFinally.Boomerang_Power_1;
        res.imgIndex = 2;
        res.price = 350;
        res.comment = "伤害又继续猛增";
        return res;
    }

    static Boomerang_Power_3(world) {
        let res = new TowerBoomerang(0, 0, world);
        res.name = "力量回旋镖3级";
        res.hpInit(10000);
        res.damage = 800;
        res.rangeR = 110;
        res.barWidth = 20;
        res.barLen = 40;
        res.r += 4;
        res.barRotateSelfSpeed = 0.05;
        res.bar = res.initBar();
        res.levelUpArr = [];
        res.levelDownGetter = TowerFinally.Boomerang_Power_2;
        res.imgIndex = 2;
        res.price = 400;
        res.comment = "伤害更大了，这恐怕不是回旋镖了，叫回旋的板砖儿...";
        return res;
    }

 

    static AirCannon_1(world) {
        let b = new TowerRay(0, 0, world);
        b.name = "1级空气炮"
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

    static AirCannon_2(world) {
        let b = new TowerRay(0, 0, world);
        b.name = "2级空气炮"
        b.r += 7;
        b.rayMoveSpeed = 9;
        b.rayMaxRange = 300;
        b.rayClock = 50;
        b.rayLen = 40;  // 射线的长度
        b.rayRepel = 0.2;
        b.attackFunc = b.gerAttack;
        b.hpInit(5000);
        b.rangeR = 130;
        b.rayColor = new MyColor(103, 150, 138, 0.5);
        b.levelDownGetter = TowerFinally.AirCannon_1;
        b.levelUpArr = [TowerFinally.AirCannon_3];
        b.imgIndex = 30;
        b.price = 320;
        b.comment =  `击退作用加强，运用的好可能可以赖敌人`;
        return b;
    }

    static AirCannon_3(world) {
        let b = new TowerRay(0, 0, world);
        b.name = "3级空气炮"
        b.r += 8;
        b.rayMoveSpeed = 10;
        b.rayMaxRange = 300;
        b.rayClock = 50;
        b.rayLen = 50;  // 射线的长度
        b.rayRepel = 0.25;
        b.attackFunc = b.gerAttack;
        b.hpInit(10000);
        b.rangeR = 150;
        b.rayColor = new MyColor(103, 150, 138, 0.5);
        b.levelDownGetter = TowerFinally.AirCannon_2;
        b.levelUpArr = [];
        b.imgIndex = 30;
        b.price = 400;
        b.comment =  `击退进一步加强了`;
        return b;
    }



    static FutureCannon_2(world) {
        let b = new TowerRay(0, 0, world);
        b.name = "2级高科技塔";
        b.r += 5;
        b.hpInit(10000);
        b.rangeR = 170;
        b.rayMoveSpeed = 15;
        b.rayMaxRange = 250;
        b.rayClock = 6;
        b.rayNum = 1;
        b.rayDeviationRotate = 0;
        b.damage = 20;
        b.rayThrowAble = false;
        b.attackFunc = b.shootingAttack;
        b.rayLen = 30;  // 射线的长度
        b.rayWidth = 4;
        b.rayColor = new MyColor(69, 200, 165, 0.9);

        b.levelDownGetter = TowerFinally.FutureCannon_1;
        b.levelUpArr = [TowerFinally.FutureCannon_3];
        b.imgIndex = 51;
        b.price = 300;
        b.comment =  `高科技塔，发射的光粒子弹加强了`;
        return b;
    }

    static FutureCannon_3(world) {
        let b = new TowerRay(0, 0, world);
        b.name = "3级高科技塔";
        b.r += 7;

        b.hpInit(20000);
        b.rangeR = 200;
        b.rayMoveSpeed = 17;
        b.rayMaxRange = 300;
        b.rayClock = 5;
        b.rayNum = 1;
        b.rayDeviationRotate = 0.1;
        b.damage = 35;
        b.rayThrowAble = true;
        b.attackFunc = b.shootingAttack;
        b.rayLen = 40;  // 射线的长度
        b.rayWidth = 5;
        b.rayColor = new MyColor(69, 195, 165, 0.6);

        b.levelDownGetter = TowerFinally.FutureCannon_2;
        b.levelUpArr = [TowerFinally.FutureCannon_4];
        b.imgIndex = 52;
        b.price = 600;
        b.comment =  `发射的子弹进一步加强`;
        return b;
    }

    static FutureCannon_4(world) {
        let b = new TowerRay(0, 0, world);
        b.name = "4级高科技塔";
        b.r += 9;
        b.hpInit(50000);
        b.rangeR = 250;
        b.rayMoveSpeed = 16;
        b.rayMaxRange = 400;
        b.rayClock = 4;
        b.rayNum = 1;
        b.rayDeviationRotate = 0;
        b.damage = 37;
        b.rayThrowAble = true;
        b.attackFunc = b.shootingAttack;
        b.rayLen = 40;  // 射线的长度
        b.rayDeviationRotate = 0.2;
        b.rayWidth = 6;
        b.rayColor = new MyColor(69, 180, 165, 0.6);
        b.levelDownGetter = TowerFinally.FutureCannon_3;
        b.levelUpArr = [TowerFinally.FutureCannon_5];
        b.imgIndex = 53;
        b.price = 800;
        b.comment =  `发射的子弹能够穿过敌人了`;
        return b;
    }

    static FutureCannon_5(world) {
        let b = new TowerRay(0, 0, world);
        b.name = "5级高科技塔";
        b.r += 12;
        b.hpInit(100000);
        b.rangeR = 280;
        b.rayMoveSpeed = 16;
        b.rayMaxRange = 400;
        b.rayClock = 2;
        b.rayNum = 1;
        b.rayDeviationRotate = 0.3;
        b.damage = 40;
        b.rayThrowAble = true;
        b.attackFunc = b.shootingAttack;
        b.rayLen = 45;  // 射线的长度
        b.rayWidth = 7;
        b.rayColor = new MyColor(69, 150, 165, 0.6);
        b.levelDownGetter = TowerFinally.FutureCannon_4;
        b.levelUpArr = [];
        b.imgIndex = 54;
        b.price = 1200;
        b.comment =  `发射的子弹进一步加强了`;
        return b;
    }

  
    static Laser_Red(world) {
        let b = new TowerRay(0, 0, world);
        b.name = "红激光"
        b.r += 7;

        b.rangeR = 250;
        b.rayLen = 300;
        b.rayClock = 10;
        b.rayWidth = 5;
        b.damage = 100;
        b.hpInit(10000);
        b.rayColor = new MyColor(255, 0, 0, 1);

        b.levelUpArr = [TowerFinally.Laser_Red_Alpha_1, TowerFinally.Laser_Red_Beta_1];
        b.levelDownGetter = TowerFinally.Laser;
        b.imgIndex = 57;
        b.price = 800;
        b.comment = `绿色激光是一种高频激光，蓝色激光是一种低频高伤害激光，而红色激光是一种大范围群体伤害激光，能够穿射`
        return b;
    }

    static Laser_Red_Alpha_1(world) {
        let b = new TowerRay(0, 0, world);
        b.name = "1级Alpha红激光";
        b.r += 9;

        b.rangeR = 300;
        b.rayLen = 1000;
        b.rayClock = 30;
        b.rayWidth = 10;
        b.damage = 300;
        b.hpInit(20000);
        b.rayColor = new MyColor(255, 0, 0, 1);

        b.levelUpArr = [TowerFinally.Laser_Red_Alpha_2];
        b.levelDownGetter = TowerFinally.Laser_Red;
        b.imgIndex = 57;
        b.price = 800;
        b.comment = `这种激光的穿射能力更强了, 激光的长度几乎能够穿过整个战场`;
        return b;
    }

    static Laser_Red_Alpha_2(world) {
        let b = new TowerRay(0, 0, world);
        b.name = "2级Alpha红激光"
        b.r += 12;

        b.rangeR = 320;
        b.rayLen = 1000;
        b.rayClock = 31;
        b.rayWidth = 15;
        b.damage = 500;
        b.hpInit(50000);
        b.rayColor = new MyColor(255, 0, 0, 1);

        b.levelUpArr = [];
        b.levelDownGetter = TowerFinally.Laser_Red_Alpha_1;
        b.imgIndex = 57;
        b.price = 900;
        b.comment = "增加了激光的伤害";
        return b;
    }

    static Laser_Red_Beta_1(world) {
        let b = new TowerRay(0, 0, world);
        b.name = "1级Beta红激光"
        b.r += 8;
        b.damage = 50;
        b.rangeR = 0;
        b.rayLen = 300;
        b.rayWidth = 2;
        b.hpInit(10000);
        b.rayColor = new MyColor(255, 0, 0, 1);

        b.attackFunc = b.scanningAttack;
        b.levelUpArr = [TowerFinally.Laser_Red_Beta_2];
        b.levelDownGetter = TowerFinally.Laser_Red;
        b.imgIndex = 57;
        b.price = 600;
        b.comment = `激光不再有固定的目标，开始直接旋转扫射，只要被激光扫到，就会受到伤害`
        return b;
    }

    static Laser_Red_Beta_2(world) {
        let b = new TowerRay(0, 0, world);
        b.name = "2级Beta红激光"
        b.r += 13;
        b.damage = 100;
        b.rangeR = 0;
        b.rayLen = 1000;
        b.rayWidth = 5;
        b.hpInit(50000);
        b.rayColor = new MyColor(255, 0, 0, 1);

        b.attackFunc = b.scanningAttack;
        b.levelDownGetter = TowerFinally.Laser_Red_Beta_1;
        b.levelUpArr = [];
        b.imgIndex = 57;
        b.price = 1000;
        b.comment = `全屏扫射`
        return b;
    }
}

const TOWER_FUNC_ARR = [

    TowerFinally.BasicCannon,
    TowerFinally.MachineGun_1,
    TowerFinally.MachineGun_2,
    TowerFinally.MachineGun_3,

    TowerFinally.Artillery_1,
    TowerFinally.Artillery_2,
    TowerFinally.Artillery_3,

    TowerFinally.MissileGun_1,

    TowerFinally.Shotgun_1,

    TowerFinally.ShotCannon_1,
    TowerFinally.ShotCannon_2,

    TowerFinally.ArmorPiercing_1,
    TowerFinally.ArmorPiercing_2,
    TowerFinally.ArmorPiercing_3,

    TowerFinally.FrozenCannon_1,
    TowerFinally.FrozenCannon_2,

    TowerFinally.SprayCannon_1,
    TowerFinally.SprayCannon_2,
    TowerFinally.SprayCannon_3,
    TowerFinally.SprayCannon_Double,

    TowerFinally.Flamethrower_1,
    TowerFinally.Flamethrower_2,

    TowerFinally.Poison_1,
    TowerFinally.Poison_2,

    TowerFinally.FutureCannon_2,

    TowerFinally.Laser_Hell_1,

    TowerFinally.Laser_Red,

    TowerFinally.Earthquake,
    TowerFinally.Thunder_1,

    TowerFinally.Hammer,
    TowerFinally.Boomerang,

    TowerFinally.ThunderBall_1,
    TowerFinally.AirCannon_1,
];

const TOWERS_IMG = new Image();
TOWERS_IMG.src = "towers/imgs/towers.png";
const TOWER_IMG_WIDTH = 1000;
const TOWER_IMG_HEIGHT = 1000;
const TOWER_IMG_PRE_WIDTH = 100;
const TOWER_IMG_PRE_HEIGHT = 100;
