'use strict';var lang_1 = require('angular2/src/facade/lang');
var route_path_1 = require('./route_path');
var RegexRoutePath = (function () {
    function RegexRoutePath(_reString, _serializer) {
        this._reString = _reString;
        this._serializer = _serializer;
        this.terminal = true;
        this.specificity = '2';
        this.hash = this._reString;
        this._regex = lang_1.RegExpWrapper.create(this._reString);
    }
    RegexRoutePath.prototype.matchUrl = function (url) {
        var urlPath = url.toString();
        var params = {};
        var matcher = lang_1.RegExpWrapper.matcher(this._regex, urlPath);
        var match = lang_1.RegExpMatcherWrapper.next(matcher);
        if (lang_1.isBlank(match)) {
            return null;
        }
        for (var i = 0; i < match.length; i += 1) {
            params[i.toString()] = match[i];
        }
        return new route_path_1.MatchedUrl(urlPath, [], params, [], null);
    };
    RegexRoutePath.prototype.generateUrl = function (params) { return this._serializer(params); };
    RegexRoutePath.prototype.toString = function () { return this._reString; };
    return RegexRoutePath;
})();
exports.RegexRoutePath = RegexRoutePath;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnZXhfcm91dGVfcGF0aC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRpZmZpbmdfcGx1Z2luX3dyYXBwZXItb3V0cHV0X3BhdGgtdTA3N0NOTDMudG1wL2FuZ3VsYXIyL3NyYy9yb3V0ZXIvcnVsZXMvcm91dGVfcGF0aHMvcmVnZXhfcm91dGVfcGF0aC50cyJdLCJuYW1lcyI6WyJSZWdleFJvdXRlUGF0aCIsIlJlZ2V4Um91dGVQYXRoLmNvbnN0cnVjdG9yIiwiUmVnZXhSb3V0ZVBhdGgubWF0Y2hVcmwiLCJSZWdleFJvdXRlUGF0aC5nZW5lcmF0ZVVybCIsIlJlZ2V4Um91dGVQYXRoLnRvU3RyaW5nIl0sIm1hcHBpbmdzIjoiQUFBQSxxQkFBMkQsMEJBQTBCLENBQUMsQ0FBQTtBQUV0RiwyQkFBa0QsY0FBYyxDQUFDLENBQUE7QUFLakU7SUFPRUEsd0JBQW9CQSxTQUFpQkEsRUFBVUEsV0FBNEJBO1FBQXZEQyxjQUFTQSxHQUFUQSxTQUFTQSxDQUFRQTtRQUFVQSxnQkFBV0EsR0FBWEEsV0FBV0EsQ0FBaUJBO1FBTHBFQSxhQUFRQSxHQUFZQSxJQUFJQSxDQUFDQTtRQUN6QkEsZ0JBQVdBLEdBQVdBLEdBQUdBLENBQUNBO1FBSy9CQSxJQUFJQSxDQUFDQSxJQUFJQSxHQUFHQSxJQUFJQSxDQUFDQSxTQUFTQSxDQUFDQTtRQUMzQkEsSUFBSUEsQ0FBQ0EsTUFBTUEsR0FBR0Esb0JBQWFBLENBQUNBLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLFNBQVNBLENBQUNBLENBQUNBO0lBQ3JEQSxDQUFDQTtJQUVERCxpQ0FBUUEsR0FBUkEsVUFBU0EsR0FBUUE7UUFDZkUsSUFBSUEsT0FBT0EsR0FBR0EsR0FBR0EsQ0FBQ0EsUUFBUUEsRUFBRUEsQ0FBQ0E7UUFDN0JBLElBQUlBLE1BQU1BLEdBQTRCQSxFQUFFQSxDQUFDQTtRQUN6Q0EsSUFBSUEsT0FBT0EsR0FBR0Esb0JBQWFBLENBQUNBLE9BQU9BLENBQUNBLElBQUlBLENBQUNBLE1BQU1BLEVBQUVBLE9BQU9BLENBQUNBLENBQUNBO1FBQzFEQSxJQUFJQSxLQUFLQSxHQUFHQSwyQkFBb0JBLENBQUNBLElBQUlBLENBQUNBLE9BQU9BLENBQUNBLENBQUNBO1FBRS9DQSxFQUFFQSxDQUFDQSxDQUFDQSxjQUFPQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUNuQkEsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0E7UUFDZEEsQ0FBQ0E7UUFFREEsR0FBR0EsQ0FBQ0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsRUFBRUEsQ0FBQ0EsR0FBR0EsS0FBS0EsQ0FBQ0EsTUFBTUEsRUFBRUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsRUFBRUEsQ0FBQ0E7WUFDekNBLE1BQU1BLENBQUNBLENBQUNBLENBQUNBLFFBQVFBLEVBQUVBLENBQUNBLEdBQUdBLEtBQUtBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO1FBQ2xDQSxDQUFDQTtRQUVEQSxNQUFNQSxDQUFDQSxJQUFJQSx1QkFBVUEsQ0FBQ0EsT0FBT0EsRUFBRUEsRUFBRUEsRUFBRUEsTUFBTUEsRUFBRUEsRUFBRUEsRUFBRUEsSUFBSUEsQ0FBQ0EsQ0FBQ0E7SUFDdkRBLENBQUNBO0lBRURGLG9DQUFXQSxHQUFYQSxVQUFZQSxNQUE0QkEsSUFBa0JHLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLFdBQVdBLENBQUNBLE1BQU1BLENBQUNBLENBQUNBLENBQUNBLENBQUNBO0lBRTVGSCxpQ0FBUUEsR0FBUkEsY0FBcUJJLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLFNBQVNBLENBQUNBLENBQUNBLENBQUNBO0lBQy9DSixxQkFBQ0E7QUFBREEsQ0FBQ0EsQUFoQ0QsSUFnQ0M7QUFoQ1ksc0JBQWMsaUJBZ0MxQixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtSZWdFeHBXcmFwcGVyLCBSZWdFeHBNYXRjaGVyV3JhcHBlciwgaXNCbGFua30gZnJvbSAnYW5ndWxhcjIvc3JjL2ZhY2FkZS9sYW5nJztcbmltcG9ydCB7VXJsLCBSb290VXJsfSBmcm9tICcuLi8uLi91cmxfcGFyc2VyJztcbmltcG9ydCB7Um91dGVQYXRoLCBHZW5lcmF0ZWRVcmwsIE1hdGNoZWRVcmx9IGZyb20gJy4vcm91dGVfcGF0aCc7XG5cblxuZXhwb3J0IGludGVyZmFjZSBSZWdleFNlcmlhbGl6ZXIgeyAocGFyYW1zOiB7W2tleTogc3RyaW5nXTogYW55fSk6IEdlbmVyYXRlZFVybDsgfVxuXG5leHBvcnQgY2xhc3MgUmVnZXhSb3V0ZVBhdGggaW1wbGVtZW50cyBSb3V0ZVBhdGgge1xuICBwdWJsaWMgaGFzaDogc3RyaW5nO1xuICBwdWJsaWMgdGVybWluYWw6IGJvb2xlYW4gPSB0cnVlO1xuICBwdWJsaWMgc3BlY2lmaWNpdHk6IHN0cmluZyA9ICcyJztcblxuICBwcml2YXRlIF9yZWdleDogUmVnRXhwO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3JlU3RyaW5nOiBzdHJpbmcsIHByaXZhdGUgX3NlcmlhbGl6ZXI6IFJlZ2V4U2VyaWFsaXplcikge1xuICAgIHRoaXMuaGFzaCA9IHRoaXMuX3JlU3RyaW5nO1xuICAgIHRoaXMuX3JlZ2V4ID0gUmVnRXhwV3JhcHBlci5jcmVhdGUodGhpcy5fcmVTdHJpbmcpO1xuICB9XG5cbiAgbWF0Y2hVcmwodXJsOiBVcmwpOiBNYXRjaGVkVXJsIHtcbiAgICB2YXIgdXJsUGF0aCA9IHVybC50b1N0cmluZygpO1xuICAgIHZhciBwYXJhbXM6IHtba2V5OiBzdHJpbmddOiBzdHJpbmd9ID0ge307XG4gICAgdmFyIG1hdGNoZXIgPSBSZWdFeHBXcmFwcGVyLm1hdGNoZXIodGhpcy5fcmVnZXgsIHVybFBhdGgpO1xuICAgIHZhciBtYXRjaCA9IFJlZ0V4cE1hdGNoZXJXcmFwcGVyLm5leHQobWF0Y2hlcik7XG5cbiAgICBpZiAoaXNCbGFuayhtYXRjaCkpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWF0Y2gubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIHBhcmFtc1tpLnRvU3RyaW5nKCldID0gbWF0Y2hbaV07XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBNYXRjaGVkVXJsKHVybFBhdGgsIFtdLCBwYXJhbXMsIFtdLCBudWxsKTtcbiAgfVxuXG4gIGdlbmVyYXRlVXJsKHBhcmFtczoge1trZXk6IHN0cmluZ106IGFueX0pOiBHZW5lcmF0ZWRVcmwgeyByZXR1cm4gdGhpcy5fc2VyaWFsaXplcihwYXJhbXMpOyB9XG5cbiAgdG9TdHJpbmcoKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMuX3JlU3RyaW5nOyB9XG59XG4iXX0=