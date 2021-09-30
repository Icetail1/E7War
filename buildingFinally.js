/**
 * 一些特殊能力的建筑
 * by littlefean
 */
class BuildingFinally {
    // 大本
    static Root(world) {
        let res = new Building(Vector.zero(), world);
        res.name = "大本";
        res.r = 20;
        res.hpInit(10000);

        res.bodyStrokeColor = [0, 0, 0, 1];
        res.bodyStrokeWidth = 5;
        res.bodyColor = [50, 50, 50, 1];
        return res;
    }

    // 采集器
    static Collector(world) {
        let res = new Building(Vector.zero(), world);
        res.name = "采集器";
        res.moneyAddedAble = true;
        res.moneyAddedNum = 1;
        res.moneyAddedFreezeTime = 20;
        res.r = 3;
        res.hpInit(300);

        res.bodyStrokeColor = [0, 0, 0, 1];
        res.bodyStrokeWidth = 1;
        res.bodyColor = [0, 0, 0, 0];
        return res;
    }

    // 治疗仪器
    static Treatment(world) {
        let res = new Building(Vector.zero(), world);
        res.name = "维修塔楼";
        res.otherHpAddAble = true;
        res.otherHpAddNum = 200;
        res.otherHpAddRadius = 120;
        res.otherHpAddFreezeTime = 100;
        res.r = 5;
        res.hpInit(3000);
        res.price = 100;

        res.bodyStrokeColor = [0, 0, 0, 1];
        res.bodyStrokeWidth = 1;
        res.bodyColor = [25, 25, 25, 0.8];
        return res;
    }

}

const BUILDING_FUNC_ARR = [
    // BuildingFinally.Root,
    BuildingFinally.Collector,
    BuildingFinally.Treatment,
];

