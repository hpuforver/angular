import { RegExpWrapper, RegExpMatcherWrapper, isBlank } from 'angular2/src/facade/lang';
import { MatchedUrl } from './route_path';
export class RegexRoutePath {
    constructor(_reString, _serializer) {
        this._reString = _reString;
        this._serializer = _serializer;
        this.terminal = true;
        this.specificity = '2';
        this.hash = this._reString;
        this._regex = RegExpWrapper.create(this._reString);
    }
    matchUrl(url) {
        var urlPath = url.toString();
        var params = {};
        var matcher = RegExpWrapper.matcher(this._regex, urlPath);
        var match = RegExpMatcherWrapper.next(matcher);
        if (isBlank(match)) {
            return null;
        }
        for (let i = 0; i < match.length; i += 1) {
            params[i.toString()] = match[i];
        }
        return new MatchedUrl(urlPath, [], params, [], null);
    }
    generateUrl(params) { return this._serializer(params); }
    toString() { return this._reString; }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnZXhfcm91dGVfcGF0aC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRpZmZpbmdfcGx1Z2luX3dyYXBwZXItb3V0cHV0X3BhdGgtaDYwRDJtMG0udG1wL2FuZ3VsYXIyL3NyYy9yb3V0ZXIvcnVsZXMvcm91dGVfcGF0aHMvcmVnZXhfcm91dGVfcGF0aC50cyJdLCJuYW1lcyI6WyJSZWdleFJvdXRlUGF0aCIsIlJlZ2V4Um91dGVQYXRoLmNvbnN0cnVjdG9yIiwiUmVnZXhSb3V0ZVBhdGgubWF0Y2hVcmwiLCJSZWdleFJvdXRlUGF0aC5nZW5lcmF0ZVVybCIsIlJlZ2V4Um91dGVQYXRoLnRvU3RyaW5nIl0sIm1hcHBpbmdzIjoiT0FBTyxFQUFDLGFBQWEsRUFBRSxvQkFBb0IsRUFBRSxPQUFPLEVBQUMsTUFBTSwwQkFBMEI7T0FFOUUsRUFBMEIsVUFBVSxFQUFDLE1BQU0sY0FBYztBQUtoRTtJQU9FQSxZQUFvQkEsU0FBaUJBLEVBQVVBLFdBQTRCQTtRQUF2REMsY0FBU0EsR0FBVEEsU0FBU0EsQ0FBUUE7UUFBVUEsZ0JBQVdBLEdBQVhBLFdBQVdBLENBQWlCQTtRQUxwRUEsYUFBUUEsR0FBWUEsSUFBSUEsQ0FBQ0E7UUFDekJBLGdCQUFXQSxHQUFXQSxHQUFHQSxDQUFDQTtRQUsvQkEsSUFBSUEsQ0FBQ0EsSUFBSUEsR0FBR0EsSUFBSUEsQ0FBQ0EsU0FBU0EsQ0FBQ0E7UUFDM0JBLElBQUlBLENBQUNBLE1BQU1BLEdBQUdBLGFBQWFBLENBQUNBLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLFNBQVNBLENBQUNBLENBQUNBO0lBQ3JEQSxDQUFDQTtJQUVERCxRQUFRQSxDQUFDQSxHQUFRQTtRQUNmRSxJQUFJQSxPQUFPQSxHQUFHQSxHQUFHQSxDQUFDQSxRQUFRQSxFQUFFQSxDQUFDQTtRQUM3QkEsSUFBSUEsTUFBTUEsR0FBNEJBLEVBQUVBLENBQUNBO1FBQ3pDQSxJQUFJQSxPQUFPQSxHQUFHQSxhQUFhQSxDQUFDQSxPQUFPQSxDQUFDQSxJQUFJQSxDQUFDQSxNQUFNQSxFQUFFQSxPQUFPQSxDQUFDQSxDQUFDQTtRQUMxREEsSUFBSUEsS0FBS0EsR0FBR0Esb0JBQW9CQSxDQUFDQSxJQUFJQSxDQUFDQSxPQUFPQSxDQUFDQSxDQUFDQTtRQUUvQ0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDbkJBLE1BQU1BLENBQUNBLElBQUlBLENBQUNBO1FBQ2RBLENBQUNBO1FBRURBLEdBQUdBLENBQUNBLENBQUNBLEdBQUdBLENBQUNBLENBQUNBLEdBQUdBLENBQUNBLEVBQUVBLENBQUNBLEdBQUdBLEtBQUtBLENBQUNBLE1BQU1BLEVBQUVBLENBQUNBLElBQUlBLENBQUNBLEVBQUVBLENBQUNBO1lBQ3pDQSxNQUFNQSxDQUFDQSxDQUFDQSxDQUFDQSxRQUFRQSxFQUFFQSxDQUFDQSxHQUFHQSxLQUFLQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtRQUNsQ0EsQ0FBQ0E7UUFFREEsTUFBTUEsQ0FBQ0EsSUFBSUEsVUFBVUEsQ0FBQ0EsT0FBT0EsRUFBRUEsRUFBRUEsRUFBRUEsTUFBTUEsRUFBRUEsRUFBRUEsRUFBRUEsSUFBSUEsQ0FBQ0EsQ0FBQ0E7SUFDdkRBLENBQUNBO0lBRURGLFdBQVdBLENBQUNBLE1BQTRCQSxJQUFrQkcsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsV0FBV0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7SUFFNUZILFFBQVFBLEtBQWFJLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLFNBQVNBLENBQUNBLENBQUNBLENBQUNBO0FBQy9DSixDQUFDQTtBQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtSZWdFeHBXcmFwcGVyLCBSZWdFeHBNYXRjaGVyV3JhcHBlciwgaXNCbGFua30gZnJvbSAnYW5ndWxhcjIvc3JjL2ZhY2FkZS9sYW5nJztcbmltcG9ydCB7VXJsLCBSb290VXJsfSBmcm9tICcuLi8uLi91cmxfcGFyc2VyJztcbmltcG9ydCB7Um91dGVQYXRoLCBHZW5lcmF0ZWRVcmwsIE1hdGNoZWRVcmx9IGZyb20gJy4vcm91dGVfcGF0aCc7XG5cblxuZXhwb3J0IGludGVyZmFjZSBSZWdleFNlcmlhbGl6ZXIgeyAocGFyYW1zOiB7W2tleTogc3RyaW5nXTogYW55fSk6IEdlbmVyYXRlZFVybDsgfVxuXG5leHBvcnQgY2xhc3MgUmVnZXhSb3V0ZVBhdGggaW1wbGVtZW50cyBSb3V0ZVBhdGgge1xuICBwdWJsaWMgaGFzaDogc3RyaW5nO1xuICBwdWJsaWMgdGVybWluYWw6IGJvb2xlYW4gPSB0cnVlO1xuICBwdWJsaWMgc3BlY2lmaWNpdHk6IHN0cmluZyA9ICcyJztcblxuICBwcml2YXRlIF9yZWdleDogUmVnRXhwO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3JlU3RyaW5nOiBzdHJpbmcsIHByaXZhdGUgX3NlcmlhbGl6ZXI6IFJlZ2V4U2VyaWFsaXplcikge1xuICAgIHRoaXMuaGFzaCA9IHRoaXMuX3JlU3RyaW5nO1xuICAgIHRoaXMuX3JlZ2V4ID0gUmVnRXhwV3JhcHBlci5jcmVhdGUodGhpcy5fcmVTdHJpbmcpO1xuICB9XG5cbiAgbWF0Y2hVcmwodXJsOiBVcmwpOiBNYXRjaGVkVXJsIHtcbiAgICB2YXIgdXJsUGF0aCA9IHVybC50b1N0cmluZygpO1xuICAgIHZhciBwYXJhbXM6IHtba2V5OiBzdHJpbmddOiBzdHJpbmd9ID0ge307XG4gICAgdmFyIG1hdGNoZXIgPSBSZWdFeHBXcmFwcGVyLm1hdGNoZXIodGhpcy5fcmVnZXgsIHVybFBhdGgpO1xuICAgIHZhciBtYXRjaCA9IFJlZ0V4cE1hdGNoZXJXcmFwcGVyLm5leHQobWF0Y2hlcik7XG5cbiAgICBpZiAoaXNCbGFuayhtYXRjaCkpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWF0Y2gubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIHBhcmFtc1tpLnRvU3RyaW5nKCldID0gbWF0Y2hbaV07XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBNYXRjaGVkVXJsKHVybFBhdGgsIFtdLCBwYXJhbXMsIFtdLCBudWxsKTtcbiAgfVxuXG4gIGdlbmVyYXRlVXJsKHBhcmFtczoge1trZXk6IHN0cmluZ106IGFueX0pOiBHZW5lcmF0ZWRVcmwgeyByZXR1cm4gdGhpcy5fc2VyaWFsaXplcihwYXJhbXMpOyB9XG5cbiAgdG9TdHJpbmcoKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMuX3JlU3RyaW5nOyB9XG59XG4iXX0=