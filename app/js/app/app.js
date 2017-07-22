define(['fb', 'radio', 'modules/menu', 'modules/toDoList', 'modules/userSettings'],
    function (fb, radio, menu, toDo, settings) {
        return {
            init: function () {
                radio.on('fb/initialized', this.initializeModules);
                fb.init();
            },
            initializeModules : function (user) {
                menu.init();
                settings.init();
                toDo.init(user);
            }
        };
    });
