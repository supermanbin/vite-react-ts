// class CustomPromise {
//     constructor(executor) {
//         this.state = 'pending'; // Promise 的初始状态
//         this.value = undefined; // Promise 的最终值
//         this.error = undefined; // Promise 的错误信息
//         this.onResolveCallbacks = []; // 存储成功回调函数的数组
//         this.onRejectCallbacks = []; // 存储失败回调函数的数组
//
//         const resolve = (value) => {
//             if (this.state === 'pending') {
//                 this.state = 'resolved';
//                 this.value = value;
//                 this.onResolveCallbacks.forEach(callback => callback(value));
//             }
//         };
//
//         const reject = (error) => {
//             if (this.state === 'pending') {
//                 this.state = 'rejected';
//                 this.error = error;
//                 this.onRejectCallbacks.forEach(callback => callback(error));
//             }
//         };
//
//         try {
//             executor(resolve, reject);
//         } catch (error) {
//             reject(error);
//         }
//     }
//
//     then(onResolve, onReject) {
//         return new CustomPromise((resolve, reject) => {
//             const resolveHandler = (value) => {
//                 try {
//                     if (typeof onResolve === 'function') {
//                         const result = onResolve(value);
//                         if (result instanceof CustomPromise) {
//                             result.then(resolve, reject);
//                         } else {
//                             resolve(result);
//                         }
//                     } else {
//                         resolve(value);
//                     }
//                 } catch (error) {
//                     reject(error);
//                 }
//             };
//
//             const rejectHandler = (error) => {
//                 try {
//                     if (typeof onReject === 'function') {
//                         const result = onReject(error);
//                         if (result instanceof CustomPromise) {
//                             result.then(resolve, reject);
//                         } else {
//                             resolve(result);
//                         }
//                     } else {
//                         reject(error);
//                     }
//                 } catch (error) {
//                     reject(error);
//                 }
//             };
//
//             if (this.state === 'resolved') {
//                 resolveHandler(this.value);
//             } else if (this.state === 'rejected') {
//                 rejectHandler(this.error);
//             } else {
//                 this.onResolveCallbacks.push(resolveHandler);
//                 this.onRejectCallbacks.push(rejectHandler);
//             }
//         });
//     }
//
//     catch(onReject) {
//         return this.then(null, onReject);
//     }
// }
const p = new Promise((resolve, reject) => {
    resolve('resolve!!!');
});
p.then(value => {
    console.log(value)
})

enum State {
    Pending,
    Fulfilled,
    Rejected
}

export default class CustomPromise {
    private state: State;
    private value: any;
    private error: any;
    private onResolveCallbacks: Function[];
    private onRejectCallbacks: Function[];
    constructor(executor: Function) {
        this.state = State.Pending;
        this.value = undefined;
        this.error = undefined;
        this.onResolveCallbacks = [];
        this.onRejectCallbacks = [];

        const resolvingFunction = (val: any) => {
            if (this.state === State.Pending) {
                this.state = State.Fulfilled;
                this.value = val;
                this.onResolveCallbacks.forEach(callback => {
                    callback(val);
                })
            }
        }

        const rejectFuction = (error: any) => {
            if (this.state === State.Pending) {
                this.state = State.Rejected;
                this.error = error;
                this.onRejectCallbacks.forEach(callback => {
                    callback(error);
                })
            }
        }

        try {
            executor(resolvingFunction, rejectFuction);
        } catch (error) {
            rejectFuction(error);
        }

    }

    then(onResolve, onReject) {
        return new CustomPromise((resolve, reject) => {

        })
    }
}
