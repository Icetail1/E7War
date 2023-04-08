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
        b.rayClock = 10;
        b.rayNum = 1;
        b.rayDeviationRotate = 0;
        b.damage = 1;
        b.rayThrowAble = false;
        b.attackFunc = b.shootingAttack;
        b.rayLen = 30;  // 射线的长度
        b.width = 2;
        b.rayColor = new MyColor(69, 214, 165, 1);
        b.classType = "mage";
        b.price = 2;
        b.imgIndex = 0;
        b.level = 1;
        b.comment = "想要获取更强大的激光、闪电等等的高科技武器，就要从此处升级开始，该高科技炮塔会发射激光粒子子弹";
        b.audioSrcString = "sound/发射音效/高科技塔发射.mp3";
        return b;
    }

    static  warrior_1(world) {
        let res = new TowerBoomerang(0, 0, world);
        res.name = "卡米拉<br/>☆";
        res.hpInit(300);
        res.damage = 5;
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
        b.rayClock = 50;
        b.rayLen = 2;  // 射线的长度
        b.rayColor = new MyColor(103, 150, 138, 0.5);
        b.width = 1;
        b.rayRepel = 0.1;
        b.hpInit(20);
        b.rangeR = 50;
        b.attackFunc = b.gerAttack;
        b.imgIndex = 2;
        b.price = 2;
        b.damage = 10;
        b.comment =  `发射出一个空气波，这个空气波对怪物具有击退作用`;
        return b;
    }
    static archer_1(world) {
        let res = new TowerBoomerang(0, 0, world);
        res.name = "小光弓<br/>☆";
        res.classType = "archer";
        res.hpInit(100);
        res.damage = 3;
        res.rangeR = 100;
        res.width = 5;
        res.rayLen = 5;
        res.bar = res.initBar();
        res.atkSpeed = 0.3;
        res.imgIndex = 3;
        res.price = 2;
        res.comment = "相对于普通的回旋镖，距离虽然没那么远了，但是伤害更大了，回旋镖也更大更强了";
        return res;
    }
    static knight_1(world) {
        let b = new TowerRay(0, 0, world);
        b.name = "拉斯<br/>☆"
        b.classType = "knight";
        b.rangeR = 100;
        b.rayLen = 60;
        b.rayClock = 10;
        b.width = 1;
        b.damage = 1;
        b.hpInit(1000);
        b.atkSpeed = 1;
        b.rayColor = new MyColor(255, 0, 0, 1);
        b.imgIndex = 4;
        b.price = 2;
        b.comment = `绿色激光是一种高频激光，蓝色激光是一种低频高伤害激光，而红色激光是一种大范围群体伤害激光，能够穿射`
        return b;
    }

    static heller_1(world) {
        let b = new TowerRay(0, 0, world);
        b.name = "偶像<br/>☆"
        b.classType = "heller";
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
        b.name = "小王子<br/>☆☆";
        b.hpInit(200);
        b.rangeR = 140;
        b.atkSpeed = 2;
        b.rayClock = 10;
        b.rayNum = 1;
        b.rayDeviationRotate = 0;
        b.damage = 5;
        b.rayThrowAble = false;
        b.attackFunc = b.shootingAttack;
        b.rayLen = 40;  // 射线的长度
        b.width = 4;
        b.rayColor = new MyColor(69, 214, 165, 1);
        b.classType = "mage";
        b.price = 10;
        b.imgIndex = 6;
        b.level = 1;
        b.comment = "想要获取更强大的激光、闪电等等的高科技武器，就要从此处升级开始，该高科技炮塔会发射激光粒子子弹";
        b.audioSrcString = "sound/发射音效/高科技塔发射.mp3";
        return b;
    }

    static  warrior_2(world) {
        let res = new TowerBoomerang(0, 0, world);
        res.name = "水龙<br/>☆☆";
        res.classType = "warrior";
        res.hpInit(500);
        res.damage = 10;
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
        b.rayClock = 50;
        b.rayLen = 5;  // 射线的长度
        b.rayColor = new MyColor(103, 150, 138, 0.5);
        b.width = 2;
        b.rayRepel = 0.1;
        b.hpInit(40);
        b.rangeR = 60;
        b.attackFunc = b.gerAttack;
        b.imgIndex = 8;
        b.price = 10;
        b.damage = 20;
        b.comment =  `发射出一个空气波，这个空气波对怪物具有击退作用`;
        return b;
    }
    static archer_2(world) {
        let res = new TowerBoomerang(0, 0, world);
        res.name = "水弓<br/>☆☆";
        res.classType = "archer";
        res.hpInit(300);
        res.damage = 6;
        res.rangeR = 110;
        res.width = 8;
        res.rayLen = 8;
        res.atkSpeed = 0.4;
        res.bar = res.initBar();
        res.imgIndex = 9;
        res.price = 10;
        res.comment = "相对于普通的回旋镖，距离虽然没那么远了，但是伤害更大了，回旋镖也更大更强了";
        return res;
    }
    static knight_2(world) {
        let b = new TowerRay(0, 0, world);
        b.name = "萝季<br/>☆☆"
        b.classType = "knight";
        b.rangeR = 110;
        b.rayLen = 80;
        b.rayClock = 10;
        b.width = 2;
        b.damage = 2;
        b.hpInit(1500);
        b.atkSpeed = 2;
        b.rayColor = new MyColor(255, 0, 0, 1);
        b.imgIndex = 10;
        b.price = 10;
        b.comment = `绿色激光是一种高频激光，蓝色激光是一种低频高伤害激光，而红色激光是一种大范围群体伤害激光，能够穿射`
        return b;
    }

    static heller_2(world) {
        let b = new TowerRay(0, 0, world);
        b.name = "暗水奶<br/>☆☆"
        b.classType = "heller";
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
        b.rayClock = 10;
        b.rayNum = 1;
        b.rayDeviationRotate = 0;
        b.damage = 10;
        b.rayThrowAble = false;
        b.attackFunc = b.shootingAttack;
        b.rayLen = 50;  // 射线的长度
        b.width = 3;
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
        res.hpInit(700);
        res.damage = 15;
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
        b.rayClock = 50;
        b.rayLen = 8;  // 射线的长度
        b.rayColor = new MyColor(103, 150, 138, 0.5);
        b.width = 3;
        b.rayRepel = 0.1;
        b.hpInit(60);
        b.rangeR = 80;
        b.attackFunc = b.gerAttack;
        b.imgIndex = 14;
        b.price = 30;
        b.damage = 30;
        b.comment =  `发射出一个空气波，这个空气波对怪物具有击退作用`;
        return b;
    }
    static archer_3(world) {
        let res = new TowerBoomerang(0, 0, world);
        res.name = "木蜻蜓<br/>☆☆☆";
        res.classType = "archer";
        res.hpInit(400);
        res.damage = 8;
        res.rangeR = 120;
        res.width = 10;
        res.rayLen = 10;
        res.atkSpeed = 0.6;
        res.bar = res.initBar();
        res.imgIndex = 15;
        res.price = 30;
        res.comment = "相对于普通的回旋镖，距离虽然没那么远了，但是伤害更大了，回旋镖也更大更强了";
        return res;
    }
    static knight_3(world) {
        let b = new TowerRay(0, 0, world);
        b.name = "火呆<br/>☆☆☆"
        b.classType = "knight";
        b.rangeR = 120;
        b.rayLen = 100;
        b.rayClock = 10;
        b.width = 3;
        b.damage = 4;
        b.hpInit(2000);
        b.rayColor = new MyColor(255, 0, 0, 1);
        b.imgIndex = 16;
        b.atkSpeed = 3;
        b.price = 30;
        b.comment = `绿色激光是一种高频激光，蓝色激光是一种低频高伤害激光，而红色激光是一种大范围群体伤害激光，能够穿射`
        return b;
    }

    static heller_3(world) {
        let b = new TowerRay(0, 0, world);
        b.name = "EMT<br/>☆☆☆"
        b.classType = "heller";
        b.damage = 40;
        b.rangeR = 120;
        b.rayLen = 50;
        b.width = 4;
        b.hpInit(1500);
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
        b.rayClock = 10;
        b.rayNum = 1;
        b.rayDeviationRotate = 0;
        b.damage = 15;
        b.rayThrowAble = false;
        b.attackFunc = b.shootingAttack;
        b.rayLen = 55;  // 射线的长度
        b.width = 4;
        b.rayColor = new MyColor(69, 214, 165, 1);
        b.classType = "mage";
        b.price = 40;
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
        res.hpInit(1000);
        res.atkSpeed = 0.4;
        res.rayLen=4;
        res.width =4;
        res.damage = 20;
        res.rangeR = 130;
        res.bar = res.initBar();
        res.imgIndex = 19;
        res.price = 40;
        res.comment = "一种威力不小的攻击东西，回旋镖能够穿过敌人，对所有穿过的敌人造成伤害";
        return res;
    }


    static thief_4(world) {
        let b = new TowerRay(0, 0, world);
        b.name = "木25<br/>☆☆☆☆"
        b.classType = "thief";
        b.atkSpeed = 10;
        b.rayClock = 50;
        b.rayLen = 10;  // 射线的长度
        b.rayColor = new MyColor(103, 150, 138, 0.5);
        b.width = 4;
        b.rayRepel = 0.1;
        b.hpInit(80);
        b.rangeR = 80;
        b.attackFunc = b.gerAttack;
        b.imgIndex = 20;
        b.price = 40;
        b.damage = 40;
        b.comment =  `发射出一个空气波，这个空气波对怪物具有击退作用`;
        return b;
    }
    static archer_4(world) {
        let res = new TowerBoomerang(0, 0, world);
        res.name = "光水琴<br/>☆☆☆☆";
        res.classType = "archer";
        res.hpInit(500);
        res.damage = 12;
        res.rangeR = 130;
        res.width = 15;
        res.rayLen = 15;
        res.atkSpeed = 0.8;
        res.bar = res.initBar();
        res.imgIndex = 21;
        res.price = 40;
        res.comment = "相对于普通的回旋镖，距离虽然没那么远了，但是伤害更大了，回旋镖也更大更强了";
        return res;
    }
    static knight_4(world) {
        let b = new TowerRay(0, 0, world);
        b.name = "水泰<br/>☆☆☆☆"
        b.classType = "knight";
        b.rangeR = 130;
        b.rayLen = 110;
        b.rayClock = 10;
        b.width = 4;
        b.damage = 5;
        b.hpInit(3000);
        b.rayColor = new MyColor(255, 0, 0, 1);
        b.imgIndex = 22;
        b.price = 40;
        b.atkSpeed = 4;
        b.comment = `绿色激光是一种高频激光，蓝色激光是一种低频高伤害激光，而红色激光是一种大范围群体伤害激光，能够穿射`
        return b;
    }

    static heller_4(world) {
        let b = new TowerRay(0, 0, world);
        b.name = "圣女<br/>☆☆☆☆"
        b.classType = "heller";
        b.damage = 50;
        b.rangeR = 130;
        b.rayLen = 55;
        b.width = 5;
        b.hpInit(1800);
        b.rayColor = new MyColor(255, 0, 0, 1);
        b.attackFunc = b.scanningAttack;
        b.imgIndex = 23;
        b.price = 40;
        b.atkSpeed = 4;
        b.comment = `激光不再有固定的目标，开始直接旋转扫射，只要被激光扫到，就会受到伤害`
        return b;
    }

    static mage_5(world) {
        let b = new TowerRay(0, 0, world);
        b.name = "光蜻蜓<br/>☆☆☆☆☆";
        b.hpInit(500);
        b.rangeR = 190;
        b.atkSpeed = 5;
        b.rayClock = 10;
        b.rayNum = 1;
        b.rayDeviationRotate = 0;
        b.damage = 20;
        b.rayThrowAble = false;
        b.attackFunc = b.shootingAttack;
        b.rayLen = 60;  // 射线的长度
        b.width = 5;
        b.rayColor = new MyColor(69, 214, 165, 1);
        b.classType = "mage";
        b.price = 60;
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
        res.hpInit(1200);
        res.atkSpeed = 0.5;
        res.rayLen=5;
        res.damage = 20;
        res.rangeR = 140;
        res.width =5;
        res.bar = res.initBar();
        res.imgIndex = 25;
        res.price = 60;
        res.comment = "一种威力不小的攻击东西，回旋镖能够穿过敌人，对所有穿过的敌人造成伤害";
        return res;
    }


    static thief_5(world) {
        let b = new TowerRay(0, 0, world);
        b.name = "水镰刀<br/>☆☆☆☆☆"
        b.classType = "thief";
        b.atkSpeed = 12;
        b.rayClock = 50;
        b.rayLen = 12;  // 射线的长度
        b.rayColor = new MyColor(103, 150, 138, 0.5);
        b.width = 5;
        b.rayRepel = 0.1;
        b.hpInit(90);
        b.rangeR = 90;
        b.attackFunc = b.gerAttack;
        b.imgIndex = 26;
        b.price = 60;
        b.damage = 50;
        b.comment =  `发射出一个空气波，这个空气波对怪物具有击退作用`;
        return b;
    }
    static archer_5(world) {
        let res = new TowerBoomerang(0, 0, world);
        res.name = "暗飞<br/>☆☆☆☆☆";
        res.classType = "archer";
        res.hpInit(600);
        res.damage = 15;
        res.rangeR = 140;
        res.width = 20;
        res.rayLen = 20;
        res.atkSpeed = 1;
        res.bar = res.initBar();
        res.imgIndex = 27;
        res.price = 60;
        res.comment = "相对于普通的回旋镖，距离虽然没那么远了，但是伤害更大了，回旋镖也更大更强了";
        return res;
    }
    static knight_5(world) {
        let b = new TowerRay(0, 0, world);
        b.name = "火莉莉<br/>☆☆☆☆☆"
        b.classType = "knight";
        b.rangeR = 140;
        b.rayLen = 120;
        b.rayClock = 10;
        b.width = 5;
        b.damage = 6;
        b.hpInit(4000);
        b.rayColor = new MyColor(255, 0, 0, 1);
        b.imgIndex = 28;
        b.price = 60;
        b.atkSpeed = 5;
        b.comment = `绿色激光是一种高频激光，蓝色激光是一种低频高伤害激光，而红色激光是一种大范围群体伤害激光，能够穿射`
        return b;
    }

    static heller_5(world) {
        let b = new TowerRay(0, 0, world);
        b.name = "光兔<br/>☆☆☆☆☆"
        b.classType = "heller";
        b.damage = 60;
        b.rangeR = 140;
        b.rayLen = 60;
        b.width = 6;
        b.hpInit(2000);
        b.rayColor = new MyColor(255, 0, 0, 1);
        b.attackFunc = b.scanningAttack;
        b.imgIndex = 29;
        b.price = 60;
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
        b.rayClock = 10;
        b.rayNum = 1;
        b.rayDeviationRotate = 0;
        b.damage = 30;
        b.rayThrowAble = false;
        b.attackFunc = b.shootingAttack;
        b.rayLen = 100;  // 射线的长度
        b.width = 10;
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
        res.hpInit(1500);
        res.atkSpeed = 0.8;
        res.rayLen=8;
        res.width =8;
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
        b.rayClock = 50;
        b.rayLen = 15;  // 射线的长度
        b.rayColor = new MyColor(103, 150, 138, 0.5);
        b.width = 10;
        b.rayRepel = 0.1;
        b.hpInit(100);
        b.rangeR = 100;
        b.attackFunc = b.gerAttack;
        b.imgIndex = 32;
        b.price = 100;
        b.damage = 60;
        b.comment =  `发射出一个空气波，这个空气波对怪物具有击退作用`;
        return b;
    }
    static archer_6(world) {
        let res = new TowerBoomerang(0, 0, world);
        res.name = "芙兰<br/>☆☆☆☆☆☆";
        res.classType = "archer";
        res.hpInit(700);
        res.damage = 20;
        res.rangeR = 150;
        res.width = 25;
        res.rayLen = 25;
        res.atkSpeed = 1.5;
        res.bar = res.initBar();
        res.imgIndex = 33;
        res.price = 100;
        res.comment = "相对于普通的回旋镖，距离虽然没那么远了，但是伤害更大了，回旋镖也更大更强了";
        return res;
    }
    static knight_6(world) {
        let b = new TowerRay(0, 0, world);
        b.name = "水呆<br/>☆☆☆☆☆☆"
        b.classType = "knight"; 
        b.rangeR = 150;
        b.rayLen = 150;
        b.rayClock = 10;
        b.width = 8;
        b.damage = 8;
        b.hpInit(5000);
        b.rayColor = new MyColor(255, 0, 0, 1);
        b.imgIndex = 34;
        b.price = 100;
        b.atkSpeed = 6;
        b.comment = `绿色激光是一种高频激光，蓝色激光是一种低频高伤害激光，而红色激光是一种大范围群体伤害激光，能够穿射`
        return b;
    }

    static heller_6(world) {
        let b = new TowerRay(0, 0, world);
        b.name = "YMD<br/>☆☆☆☆☆☆"
        b.classType = "heller";
        b.damage = 70;
        b.rangeR = 150;
        b.rayLen = 80;
        b.width = 8;
        b.hpInit(3000);
        b.rayColor = new MyColor(255, 0, 0, 1);
        b.attackFunc = b.scanningAttack;
        b.imgIndex = 35;
        b.price = 100;
        b.atkSpeed = 8;
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
