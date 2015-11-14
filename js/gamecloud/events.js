/**
 * Created by Janne on 20.11.2014.
 * Just a stub for holding event information
 */
var Events = {

    _bombDiedOfAgeEvent: "p4vosb6c9b92uik9",
    _enemyDiedOfAgeEvent: "l47tsmfcwje89f6r",
    _encloseEnemyEvent: "ehvlmvhdlw2hjjor",
    _encloseBombEvent: "97lvg2jus9mdvx6r",
    _newGameEvent: "5gru292wpuo3l3di",
    _gameOverEvent: "gvfvg4ngr6swcdi",

    _gainAchievementHashes : {
        "circle10InARow" : "9wn6eu458bqhbyb9",
        "learnToCircle" : "hgbs2l4lq71ra4i",
        "failCircling" : "zlb8l4ancgcik9"
    },

    _askAschievementHashes : {
        circle10InARow : "friaxzeqw4tjra4i",
        learnToCircle : "6xaw16kjfcu9pb9",
        failCircling : "vy7fczgadzjgu8fr"
    },

    giveAchievement : function(achievementName) {
        var achievement = this._gainAchievementHashes[achievementName];
        if(!achievement) {
            throw new Error("Now achievement exists with name:", achievementName);
        }
        Gamecloud.giveAchievement("NOAUTH", this._gainAchievementHashes[achievementName], Gamecloud.getUserId(), Gamecloud.getCharacterId());
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
