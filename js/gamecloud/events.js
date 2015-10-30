/**
 * Created by Janne on 20.11.2014.
 * Just a stub for holding event information
 */
var Events = {

    _bombDiedOfAgeEvent: "6kpvqowyeaznz5mi",
    _enemyDiedOfAgeEvent: "e5ceavxweub7f1or",
    _encloseEnemyEvent: "xinfx1xg5ijm7vi",
    _encloseBombEvent: "iwomvwge89yeqaor",
    _newGameEvent: "nuybavb231w3tyb9",
    _gameOverEvent: "6w47ayd620529",

    _gainAchievementHashes : {
        "circle10InARow" : "4lvhae9lkqql4n29",
        "learnToCircle" : "3dykka9hui35wmi",
        "failCircling" : "xji1jc7zoqx5hfr"
    },

    _askAschievementHashes : {
        circle10InARow : "pbob1dmxnm31sjor",
        learnToCircle : "paw37z1uhoe3tyb9",
        failCircling : "6hsgyt2mup1ra4i"
    },

    checkOwnedAchievementFromGamecloud: function (playerId) {

        Gamecloud.hasAchievement("NOAUTH", this._askAschievementHashes.circle10InARow, playerId, function (err, result) {
            if (err) {
                throw err;
            }
            console.log("--RESULTS FROM GAMECLOUD: <circle10InARow>", result);
            // We have some results
            if (result.count > 0) {
                // Set the achievement owned already
                Achievements.addAchievementToOwned("circle10InARow");
            }

        });
        Gamecloud.hasAchievement("NOAUTH", this._askAschievementHashes.learnToCircle, playerId, function (err, result) {
            if (err) {
                throw err;
            }
            // We have some results
            console.log("--RESULTS FROM GAMECLOUD: <learnToCircle>", result);
            if (result.count > 0) {
                // Set the achievement owned already
                Achievements.addAchievementToOwned("learnToCircle");
            }
        });
        Gamecloud.hasAchievement("NOAUTH", this._askAschievementHashes.failCircling, playerId, function (err, result) {
            if (err) {
                throw err;
            }
            // We have some results
            console.log("--RESULTS FROM GAMECLOUD: <failCircling>", result);
            if (result.count > 0) {
                // Set the achievement owned already
                Achievements.addAchievementToOwned("failCircling");
            }
        });
    }

};
