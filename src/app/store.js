import { createStore, combineReducers } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import rootReducer from "../reducers/index";
import hardSet from "redux-persist/lib/stateReconciler/autoMergeLevel2"

// 1 ham khoi tao store
function configureStore(initialState = {}) {

  // Dinh nghia 1 reducer voi function combineReducer, nhan 1 doi tuong 2 tham so la auth va form
  const reducer = combineReducers({
    auth: () => ({ mock: true }),
    form: persistReducer(             // form la 1 persistReducer, nhan 1 doi tuong 2 tham so: key va storage
      {
        key: "form", // key de luu tru trong localStorage, co the truy xuat voi: localStorage.getItem("persist:form")
        storage,
        stateReconciler: hardSet,
        // debug: true,
        // blacklist: ['user'],        // backlist: Danh sach cac bien trong state ma khong duoc duy tri, mat sau khi reload
        whitelist: ['user']
      },
      rootReducer                      // 1 Reducer, dinh nghia cac action, defaultState
    ),
  });

  // Dinh nghia 1 store cho redux
  const store = createStore(
    persistReducer({      // Truyen vao 1 persist reducer
      key: "root",
      debug: true,
      storage,
      whitelist: ['auth'],      // Chi co auth duoc duy tri (ko bi refresh sau khi reload )
    }, reducer), initialState);  // truyen vao reducer ben tren va gia tri khoi tao

  console.log("initialState", store.getState());

  const persistor = persistStore(store, null, () => {
    // if you want to get restoredState
    console.log("restoredState", store.getState());
  });

  // tra ve store cua redux va store cua persist
  return { store, persistor };
}

export default configureStore;
