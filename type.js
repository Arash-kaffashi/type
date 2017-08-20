function type(value, user = true) {
	switch (typeof value) {
		case "object":
			return value === null
				? "null"
				: (function(name, user) {
						return name !== "Object"
							? name.indexOf("Element") + 1 ? "element" : name
							: !user ? "Object" : value.constructor.name || "anonymous user class";
					})(Object.prototype.toString.call(value).slice(8, -1), !!user);
			break;
		case "number":
			return value !== value ? "nan" : "Number";
			break;
		default:
			return value === undefined ? "undefined" : (type => type[0].toUpperCase() + type.slice(1))(typeof value);
			break;
	}
}
