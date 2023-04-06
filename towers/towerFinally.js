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
        res.imgIndex = 2;
        res.price = 190;
        res.comment = "一种威力不小的攻击东西，回旋镖能够穿过敌人，对所有穿过的敌人造成伤害";
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
        b.imgIndex = 57;
        b.price = 800;
        b.comment = `绿色激光是一种高频激光，蓝色激光是一种低频高伤害激光，而红色激光是一种大范围群体伤害激光，能够穿射`
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
        b.imgIndex = 57;
        b.price = 600;
        b.comment = `激光不再有固定的目标，开始直接旋转扫射，只要被激光扫到，就会受到伤害`
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
