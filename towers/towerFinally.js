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

    static mage_1(world) {
        let b = new TowerRay(0, 0, world);
        b.name = "捷娜<br/>☆";

        b.hpInit(200);
        b.rangeR = 120;
        b.atkSpeed = 1;
        b.clock = 10;
        b.rayNum = 1;
        b.rayDeviationRotate = 0;
        b.damage = 5;
        b.rayThrowAble = false;
        b.attackFunc = b.shootingAttack;
        b.rayLen = 20;  // 射线的长度
        b.width = 20;
        b.rayColor = new MyColor(69, 214, 165, 1);
        b.classType = "mage";
        b.price = 2;
        b.imgIndex = 0;
        b.level = 1;
        b.comment = "想要获取更强大的激光、闪电等等的高科技武器，就要从此处升级开始，该高科技炮塔会发射激光粒子子弹";
        return b;
    }

    static  warrior_1(world) {
        let res = new TowerBoomerang(0, 0, world);
        res.name = "卡米拉<br/>☆";
        res.hpInit(500);
        res.damage = 6;
        res.rangeR = 100;
        res.atkSpeed = 0.2;
        res.width = 1;
        res.rayLen=1;
        res.bar = res.initBar();
        res.imgIndex = 1;
        res.price = 2;
        res.classType = "warrior";
        res.comment = "一种威力不小的攻击东西，回旋镖能够穿过敌人，对所有穿过的敌人造成伤害";
        return res;
    }


    static thief_1(world) {
        let b = new TowerRay(0, 0, world);
        b.name = "小光刺<br/>☆"
        b.atkSpeed = 3;
        b.classType = "thief";
        b.clock = 20;
        b.rayLen = 2;  // 射线的长度
        b.rayColor = new MyColor(103, 150, 138, 0.5);
        b.width = 1;
        b.rayRepel = 0;
        b.hpInit(20);
        b.rangeR = 120;
        b.attackFunc = b.gerAttack;
        b.imgIndex = 2;
        b.price = 2;
        b.damage = 10;
        b.comment =  `发射出一个空气波，这个空气波对怪物具有击退作用`;
        return b;
    }
    static archer_1(world) {
        let b = new Tower(0, 0, world);
        b.name = "小光弓<br/>☆";
        b.classType = "archer";
        b.rangeR = 80;
        b.damage = 1;
        b.atkSpeed = 1;
        b.bullySlideRate = 1;
        b.getmMainBullyFunc = BullyFinally.Frozen_L;
        b.clock = 10;
        b.width = 2;
        b.rayLen = 3;
        b.hpInit(100);
        b.imgIndex = 3;
        b.price = 2;
        b.comment =  `击中之后的冰冻蛋子会发生小爆炸，爆炸范围内的敌人会减速，这个减速效果可以累加，直到达到一个上限。但是冰冻和烧伤是互斥的，二者不能同时存在`;
        return b;
    }
    static knight_1(world) {
        let b = new Tower(0, 0, world);
        b.name = "拉斯<br/>☆"
        b.classType = "knight";
        b.rangeR = 100;
        b.damage = 1;
        b.atkSpeed = 1;
        b.bullySpeedAddMax = 0.5;
        b.getmMainBullyFunc = BullyFinally.Bully_M;
        b.bullyRotate = Math.PI / 10;
        b.attackFunc = b.shrapnelAttack;
        b.attackBullyNum = 5;
        b.clock = 30;
        b.width = 2;
        b.rayLen = 3;
        b.hpInit(1000);
        b.imgIndex = 4;
        b.price = 2;
        b.comment =  `发射频率很快的散弹子弹`;
        return b;
    }

    static heller_1(world) {
        let b = new TowerRay(0, 0, world);
        b.name = "偶像<br/>☆"
        b.classType = "heller";
        b.clock = 1;
        b.damage = 20;
        b.rangeR = 100;
        b.rayLen = 30;
        b.width = 1;
        b.atkSpeed = 1;
        b.hpInit(500);
        b.rayColor = new MyColor(255, 0, 0, 1);
        b.attackFunc = b.scanningAttack;
        b.imgIndex = 5;
        b.price = 2;
        b.comment = `激光不再有固定的目标，开始直接旋转扫射，只要被激光扫到，就会受到伤害`
        return b;
    }
    static mage_2(world) {
        let b = new TowerRay(0, 0, world);
        b.name = "光王子<br/>☆☆";
        b.hpInit(200);
        b.rangeR = 140;
        b.atkSpeed = 2;
        b.clock = 10;
        b.rayNum = 1;
        b.rayDeviationRotate = 0;
        b.damage = 10;
        b.rayThrowAble = false;
        b.attackFunc = b.shootingAttack;
        b.rayLen = 20;  // 射线的长度
        b.width = 20;
        b.rayColor = new MyColor(69, 214, 165, 1);
        b.classType = "mage";
        b.price = 10;
        b.imgIndex = 6;
        b.level = 1;
        b.comment = "想要获取更强大的激光、闪电等等的高科技武器，就要从此处升级开始，该高科技炮塔会发射激光粒子子弹";
        return b;
    }

    static  warrior_2(world) {
        let res = new TowerBoomerang(0, 0, world);
        res.name = "水龙<br/>☆☆";
        res.classType = "warrior";
        res.hpInit(700);
        res.damage = 12;
        res.rangeR = 110;
        res.atkSpeed = 0.2;
        res.rayLen=2;
        res.width =2;
        res.bar = res.initBar();
        res.imgIndex = 7;
        res.price = 10;
        res.comment = "一种威力不小的攻击东西，回旋镖能够穿过敌人，对所有穿过的敌人造成伤害";
        return res;
    }


    static thief_2(world) {
        let b = new TowerRay(0, 0, world);
        b.name = "岚<br/>☆☆"
        b.atkSpeed = 6;
        b.classType = "thief";
        b.clock = 25;
        b.rayLen = 5;  // 射线的长度
        b.rayColor = new MyColor(103, 150, 138, 0.5);
        b.width = 2;
        b.rayRepel = 0;
        b.hpInit(40);
        b.rangeR = 140;
        b.attackFunc = b.gerAttack;
        b.imgIndex = 8;
        b.price = 10;
        b.damage = 20;
        b.comment =  `发射出一个空气波，这个空气波对怪物具有击退作用`;
        return b;
    }
    static archer_2(world) {
        let b = new Tower(0, 0, world);
        b.name = "水弓<br/>☆☆";
        b.classType = "archer";
        b.rangeR = 100;
        b.damage = 2;
        b.atkSpeed = 3;
        b.bullySlideRate = 1;
        b.getmMainBullyFunc = BullyFinally.Frozen_L;
        b.clock = 10;
        b.width = 3;
        b.rayLen = 5;
        b.hpInit(150);
        b.imgIndex = 9;
        b.price = 10;
        b.comment =  `击中之后的冰冻蛋子会发生小爆炸，爆炸范围内的敌人会减速，这个减速效果可以累加，直到达到一个上限。但是冰冻和烧伤是互斥的，二者不能同时存在`;
        return b;
    }
    static knight_2(world) {
        let b = new TowerRay(0, 0, world);
        b.name = "萝季<br/>☆☆"
        b.classType = "knight";
        b.rangeR = 110;
        b.damage = 3;
        b.atkSpeed = 2;
        b.bullySpeedAddMax = 0.5;
        b.getmMainBullyFunc = BullyFinally.Bully_M;
        b.bullyRotate = Math.PI / 10;
        b.attackFunc = b.shrapnelAttack;
        b.attackBullyNum = 6;
        b.clock = 25;
        b.width = 2;
        b.rayLen = 5;
        b.hpInit(1200);
        b.imgIndex = 10;
        b.price = 10;
        b.comment =  `发射频率很快的散弹子弹`;
        return b;
    }

    static heller_2(world) {
        let b = new TowerRay(0, 0, world);
        b.name = "暗水奶<br/>☆☆"
        b.classType = "heller";
        b.clock = 1;
        b.damage = 30;
        b.rangeR = 110;
        b.rayLen = 40;
        b.width = 3;
        b.hpInit(1000);
        b.atkSpeed = 2;
        b.rayColor = new MyColor(255, 0, 0, 1);
        b.attackFunc = b.scanningAttack;
        b.imgIndex = 11;
        b.price = 10;
        b.comment = `激光不再有固定的目标，开始直接旋转扫射，只要被激光扫到，就会受到伤害`
        return b;
    }
    static mage_3(world) {
        let b = new TowerRay(0, 0, world);
        b.name = "火双<br/>☆☆☆";
        b.hpInit(300);
        b.rangeR = 160;
        b.atkSpeed = 3;
        b.clock = 10;
        b.rayNum = 1;
        b.rayDeviationRotate = 0;
        b.damage = 15;
        b.rayThrowAble = false;
        b.attackFunc = b.shootingAttack;
        b.rayLen = 20;  // 射线的长度
        b.width = 20;
        b.rayColor = new MyColor(69, 214, 165, 1);
        b.classType = "mage";
        b.price = 30;
        b.imgIndex = 12;
        b.level = 1;
        b.comment = "想要获取更强大的激光、闪电等等的高科技武器，就要从此处升级开始，该高科技炮塔会发射激光粒子子弹";
        b.audioSrcString = "sound/发射音效/高科技塔发射.mp3";
        return b;
    }

    static  warrior_3(world) {
        let res = new TowerBoomerang(0, 0, world);
        res.name = "Jacko<br/>☆☆☆";
        res.classType = "warrior";
        res.hpInit(1000);
        res.damage = 16;
        res.atkSpeed = 0.3;
        res.rayLen= 3;
        res.width = 3;
        res.rangeR = 120;
        res.bar = res.initBar();
        res.imgIndex = 13;
        res.price = 30;
        res.comment = "一种威力不小的攻击东西，回旋镖能够穿过敌人，对所有穿过的敌人造成伤害";
        return res;
    }


    static thief_3(world) {
        let b = new TowerRay(0, 0, world);
        b.name = "木席德<br/>☆☆☆"
        b.classType = "thief";
        b.atkSpeed = 8;
        b.clock = 20;
        b.rayLen = 8;  // 射线的长度
        b.rayColor = new MyColor(103, 150, 138, 0.5);
        b.width = 3;
        b.rayRepel = 0;
        b.hpInit(60);
        b.rangeR = 160;
        b.attackFunc = b.gerAttack;
        b.imgIndex = 14;
        b.price = 30;
        b.damage = 30;
        b.comment =  `发射出一个空气波，这个空气波对怪物具有击退作用`;
        return b;
    }
    static archer_3(world) {
        let b = new Tower(0, 0, world);
        b.name = "木蜻蜓<br/>☆☆☆";
        b.classType = "archer";
        b.rangeR = 120;
        b.damage = 3;
        b.atkSpeed = 4;
        b.bullySlideRate = 1;
        b.getmMainBullyFunc = BullyFinally.Frozen_L;
        b.clock = 10;
        b.width = 2;
        b.rayLen = 6;
        b.hpInit(200);
        b.imgIndex = 15;
        b.price = 30;
        b.comment =  `击中之后的冰冻蛋子会发生小爆炸，爆炸范围内的敌人会减速，这个减速效果可以累加，直到达到一个上限。但是冰冻和烧伤是互斥的，二者不能同时存在`;
        return b;
    }
    static knight_3(world) {
        let b = new TowerRay(0, 0, world);
        b.name = "火呆<br/>☆☆☆"
        b.classType = "knight";
        b.rangeR = 140;
        b.damage = 5;
        b.atkSpeed = 3;
        b.bullySpeedAddMax = 0.5;
        b.getmMainBullyFunc = BullyFinally.Bully_M;
        b.bullyRotate = Math.PI / 10;
        b.attackFunc = b.shrapnelAttack;
        b.attackBullyNum = 5;
        b.clock = 20;
        b.width = 2;
        b.rayLen = 7;
        b.hpInit(1400);
        b.imgIndex = 16;
        b.price = 30;
        b.comment =  `发射频率很快的散弹子弹`;
        return b;
    }

    static heller_3(world) {
        let b = new TowerRay(0, 0, world);
        b.name = "EMT<br/>☆☆☆"
        b.classType = "heller";
        b.clock = 1;
        b.damage = 40;
        b.rangeR = 120;
        b.rayLen = 50;
        b.width = 4;
        b.hpInit(1200);
        b.rayColor = new MyColor(255, 0, 0, 1);
        b.attackFunc = b.scanningAttack;
        b.imgIndex = 17;
        b.price = 30;
        b.atkSpeed = 3;
        b.comment = `激光不再有固定的目标，开始直接旋转扫射，只要被激光扫到，就会受到伤害`
        return b;
    }
    static mage_4(world) {
        let b = new TowerRay(0, 0, world);
        b.name = "艾妲<br/>☆☆☆☆";
        b.hpInit(400);
        b.rangeR = 170;
        b.atkSpeed = 4;
        b.clock = 10;
        b.rayNum = 1;
        b.rayDeviationRotate = 0;
        b.damage = 20;
        b.rayThrowAble = false;
        b.attackFunc = b.shootingAttack;
        b.rayLen = 20;  // 射线的长度
        b.width = 20;
        b.rayColor = new MyColor(69, 214, 165, 1);
        b.classType = "mage";
        b.price = 50;
        b.imgIndex = 18;
        b.level = 1;
        b.comment = "想要获取更强大的激光、闪电等等的高科技武器，就要从此处升级开始，该高科技炮塔会发射激光粒子子弹";
        b.audioSrcString = "sound/发射音效/高科技塔发射.mp3";
        return b;
    }

    static  warrior_4(world) {
        let res = new TowerBoomerang(0, 0, world);
        res.name = "扎哈克<br/>☆☆☆☆";
        res.classType = "warrior";
        res.hpInit(1300);
        res.atkSpeed = 0.4;
        res.rayLen=4;
        res.width =4;
        res.damage = 20;
        res.rangeR = 130;
        res.bar = res.initBar();
        res.imgIndex = 19;
        res.price = 50;
        res.comment = "一种威力不小的攻击东西，回旋镖能够穿过敌人，对所有穿过的敌人造成伤害";
        return res;
    }


    static thief_4(world) {
        let b = new TowerRay(0, 0, world);
        b.name = "木25<br/>☆☆☆☆"
        b.classType = "thief";
        b.atkSpeed = 10;
        b.clock = 18;
        b.rayLen = 10;  // 射线的长度
        b.rayColor = new MyColor(103, 150, 138, 0.5);
        b.width = 4;
        b.rayRepel = 0;
        b.hpInit(80);
        b.rangeR = 180;
        b.attackFunc = b.gerAttack;
        b.imgIndex = 20;
        b.price = 50;
        b.damage = 40;
        b.comment =  `发射出一个空气波，这个空气波对怪物具有击退作用`;
        return b;
    }
    static archer_4(world) {
        let b = new Tower(0, 0, world);
        b.name = "光水琴<br/>☆☆☆☆";
        b.classType = "archer";
        b.rangeR = 140;
        b.damage = 4;
        b.atkSpeed = 5;
        b.bullySlideRate = 1;
        b.getmMainBullyFunc = BullyFinally.Frozen_L;
        b.clock = 10;
        b.width = 5;
        b.rayLen = 7;
        b.hpInit(250);
        b.imgIndex = 21;
        b.price = 50;
        b.comment =  `击中之后的冰冻蛋子会发生小爆炸，爆炸范围内的敌人会减速，这个减速效果可以累加，直到达到一个上限。但是冰冻和烧伤是互斥的，二者不能同时存在`;
        return b;
    }
    static knight_4(world) {
        let b = new TowerRay(0, 0, world);
        b.name = "水泰<br/>☆☆☆☆"
        b.classType = "knight";
        b.rangeR = 160;
        b.damage = 7;
        b.atkSpeed = 5;
        b.bullySpeedAddMax = 0.5;
        b.getmMainBullyFunc = BullyFinally.Bully_M;
        b.bullyRotate = Math.PI / 10;
        b.attackFunc = b.shrapnelAttack;
        b.attackBullyNum = 5;
        b.clock = 20;
        b.width = 3;
        b.rayLen = 7;
        b.hpInit(1600);
        b.imgIndex = 22;
        b.price = 50;
        b.comment =  `发射频率很快的散弹子弹`;
        return b;
    }

    static heller_4(world) {
        let b = new TowerRay(0, 0, world);
        b.name = "圣女<br/>☆☆☆☆"
        b.classType = "heller";
        b.clock = 1;
        b.damage = 50;
        b.rangeR = 130;
        b.rayLen = 55;
        b.width = 5;
        b.hpInit(1400);
        b.rayColor = new MyColor(255, 0, 0, 1);
        b.attackFunc = b.scanningAttack;
        b.imgIndex = 23;
        b.price = 50;
        b.atkSpeed = 4;
        b.comment = `激光不再有固定的目标，开始直接旋转扫射，只要被激光扫到，就会受到伤害`
        return b;
    }

    static mage_5(world) {
        let b = new TowerRay(0, 0, world);
        b.name = "光蜻蜓<br/>☆☆☆☆☆";
        b.hpInit(500);
        b.rangeR = 150;
        b.atkSpeed = 5;
        b.clock = 10;
        b.rayNum = 1;
        b.rayDeviationRotate = 0;
        b.damage = 30;
        b.rayThrowAble = false;
        b.attackFunc = b.shootingAttack;
        b.rayLen = 20;  // 射线的长度
        b.width = 20;
        b.rayColor = new MyColor(69, 214, 165, 1);
        b.classType = "mage";
        b.price = 80;
        b.imgIndex = 24;
        b.level = 1;
        b.comment = "想要获取更强大的激光、闪电等等的高科技武器，就要从此处升级开始，该高科技炮塔会发射激光粒子子弹";
        b.audioSrcString = "sound/发射音效/高科技塔发射.mp3";
        return b;
    }

    static  warrior_5(world) {
        let res = new TowerBoomerang(0, 0, world);
        res.name = "光莉莉<br/>☆☆☆☆☆";
        res.classType = "warrior";
        res.hpInit(1500);
        res.atkSpeed = 0.5;
        res.rayLen=5;
        res.damage = 25;
        res.rangeR = 140;
        res.width =5;
        res.bar = res.initBar();
        res.imgIndex = 25;
        res.price = 80;
        res.comment = "一种威力不小的攻击东西，回旋镖能够穿过敌人，对所有穿过的敌人造成伤害";
        return res;
    }


    static thief_5(world) {
        let b = new TowerRay(0, 0, world);
        b.name = "水镰刀<br/>☆☆☆☆☆"
        b.classType = "thief";
        b.atkSpeed = 12;
        b.clock = 16;
        b.rayLen = 12;  // 射线的长度
        b.rayColor = new MyColor(103, 150, 138, 0.5);
        b.width = 5;
        b.rayRepel = 0;
        b.hpInit(90);
        b.rangeR = 200;
        b.attackFunc = b.gerAttack;
        b.imgIndex = 26;
        b.price = 80;
        b.damage = 50;
        b.comment =  `发射出一个空气波，这个空气波对怪物具有击退作用`;
        return b;
    }
    static archer_5(world) {
        let b = new Tower(0, 0, world);
        b.name = "暗飞<br/>☆☆☆☆☆";
        b.classType = "archer";
        b.rangeR = 180;
        b.damage = 5;
        b.atkSpeed = 8;
        b.bullySlideRate = 1;
        b.getmMainBullyFunc = BullyFinally.Frozen_L;
        b.clock = 10;
        b.width = 2;
        b.rayLen = 8;
        b.hpInit(300);
        b.imgIndex = 27;
        b.price = 80;
        b.comment =  `击中之后的冰冻蛋子会发生小爆炸，爆炸范围内的敌人会减速，这个减速效果可以累加，直到达到一个上限。但是冰冻和烧伤是互斥的，二者不能同时存在`;
        return b;

    }
    static knight_5(world) {
        let b = new TowerRay(0, 0, world);
        b.name = "火莉莉<br/>☆☆☆☆☆"
        b.classType = "knight";
        b.rangeR = 170;
        b.damage = 9;
        b.atkSpeed = 3;
        b.bullySpeedAddMax = 0.5;
        b.getmMainBullyFunc = BullyFinally.Bully_M;
        b.bullyRotate = Math.PI / 10;
        b.attackFunc = b.shrapnelAttack;
        b.attackBullyNum = 5;
        b.clock = 20;
        b.width = 2;
        b.rayLen = 8;
        b.hpInit(1800);
        b.imgIndex = 28;
        b.price = 80;
        b.comment =  `发射频率很快的散弹子弹`;
        return b;
    }

    static heller_5(world) {
        let b = new TowerRay(0, 0, world);
        b.name = "光兔<br/>☆☆☆☆☆"
        b.classType = "heller";
        b.clock = 1;
        b.damage = 60;
        b.rangeR = 140;
        b.rayLen = 60;
        b.width = 6;
        b.hpInit(1600);
        b.rayColor = new MyColor(255, 0, 0, 1);
        b.attackFunc = b.scanningAttack;
        b.imgIndex = 29;
        b.price = 80;
        b.atkSpeed = 5;
        b.comment = `激光不再有固定的目标，开始直接旋转扫射，只要被激光扫到，就会受到伤害`
        return b;
    }
    static mage_6(world) {
        let b = new TowerRay(0, 0, world);
        b.name = "暗露露卡<br/>☆☆☆☆☆☆";
        b.hpInit(600);
        b.rangeR = 200;
        b.atkSpeed = 6;
        b.clock = 10;
        b.rayNum = 1;
        b.rayDeviationRotate = 0;
        b.damage = 50;
        b.rayThrowAble = false;
        b.attackFunc = b.shootingAttack;
        b.rayLen = 20;  // 射线的长度
        b.width = 20;
        b.rayColor = new MyColor(69, 214, 165, 1);
        b.classType = "mage";
        b.price = 100;
        b.imgIndex = 30;
        b.level = 1;
        b.comment = "想要获取更强大的激光、闪电等等的高科技武器，就要从此处升级开始，该高科技炮塔会发射激光粒子子弹";
        b.audioSrcString = "sound/发射音效/高科技塔发射.mp3";
        return b;
    }

    static  warrior_6(world) {
        let res = new TowerBoomerang(0, 0, world);
        res.name = "史瑞杰思<br/>☆☆☆☆☆☆";
        res.classType = "warrior";
        res.hpInit(2000);
        res.atkSpeed = 0.8;
        res.rayLen=30;
        res.width =30;
        res.damage = 30;
        res.rangeR = 150;
        res.bar = res.initBar();
        res.imgIndex = 31;
        res.price = 100;
        res.comment = "一种威力不小的攻击东西，回旋镖能够穿过敌人，对所有穿过的敌人造成伤害";
        return res;
    }


    static thief_6(world) {
        let b = new TowerRay(0, 0, world);
        b.name = "血卡<br/>☆☆☆☆☆☆"
        b.classType = "thief";
        b.atkSpeed = 15;
        b.clock = 15;
        b.rayLen = 15;  // 射线的长度
        b.rayColor = new MyColor(103, 150, 138, 0.5);
        b.width = 10;
        b.rayRepel = 0.1;
        b.hpInit(100);
        b.rangeR = 250;
        b.attackFunc = b.gerAttack;
        b.imgIndex = 32;
        b.price = 100;
        b.damage = 60;
        b.comment =  `发射出一个空气波，这个空气波对怪物具有击退作用`;
        return b;
    }
    static archer_6(world) {
        let b = new Tower(0, 0, world);
        b.name = "芙兰<br/>☆☆☆☆☆☆";
        b.classType = "archer";
        b.rangeR = 180;
        b.damage = 9;
        b.atkSpeed = 10;
        b.bullySlideRate = 1;
        b.getmMainBullyFunc = BullyFinally.Frozen_L;
        b.bullyRotate = Math.PI / 10;
        b.attackFunc = b.shrapnelAttack;
        b.attackBullyNum = 5;
        b.clock = 10;
        b.width = 5;
        b.rayLen = 10;
        b.hpInit(400);
        b.imgIndex = 33;
        b.price = 100;
        b.comment =  `击中之后的冰冻蛋子会发生小爆炸，爆炸范围内的敌人会减速，这个减速效果可以累加，直到达到一个上限。但是冰冻和烧伤是互斥的，二者不能同时存在`;
        return b;
    }
    static knight_6(world) {
        let b = new TowerRay(0, 0, world);
        b.name = "水呆<br/>☆☆☆☆☆☆"
        b.classType = "knight";
        b.rangeR = 180;
        b.damage = 15;
        b.atkSpeed = 5;
        b.bullySpeedAddMax = 0.5;
        b.getmMainBullyFunc = BullyFinally.Bully_M;
        b.bullyRotate = Math.PI / 10;
        b.attackFunc = b.shrapnelAttack;
        b.attackBullyNum = 20;
        b.clock = 18;
        b.width = 2;
        b.rayLen = 7;
        b.hpInit(2000);
        b.imgIndex = 34;
        b.price = 100;
        b.comment =  `发射频率很快的散弹子弹`;
        return b;
    }

    static heller_6(world) {
        let b = new TowerRay(0, 0, world);
        b.name = "YMD<br/>☆☆☆☆☆☆"
        b.classType = "heller";
        b.clock = 1;
        b.damage = 100;
        b.rangeR = 150;
        b.rayLen = 80;
        b.width = 8;
        b.hpInit(1800);
        b.rayColor = new MyColor(255, 0, 0, 1);
        b.attackFunc = b.scanningAttack;
        b.imgIndex = 35;
        b.price = 100;
        b.atkSpeed = 20;
        b.comment = `激光不再有固定的目标，开始直接旋转扫射，只要被激光扫到，就会受到伤害`
        return b;
    }

}

const TOWER_FUNC_ARR = [

    TowerFinally.mage_1,
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
