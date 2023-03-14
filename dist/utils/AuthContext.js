import { createContext, useState } from 'react';
export var AuthContext = createContext();
export var AuthProvider = function (_a) {
    var children = _a.children;
    var _b = useState(false), isAuthenticated = _b[0], setIsAuthenticated = _b[1];
    return (<AuthContext.Provider value={{ isAuthenticated: isAuthenticated, setIsAuthenticated: setIsAuthenticated }}>
      {children}
    </AuthContext.Provider>);
};
//# sourceMappingURL=AuthContext.js.map