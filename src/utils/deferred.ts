type PromiseResolve = (value: unknown) => void
type PromiseReject = (reason?: any) => void

const Deffered = (() => {
  let resolve: PromiseResolve, reject: PromiseReject
  return class Deffered extends Promise<any> {
    public resolve
    public reject
    constructor(
      executor = (_resolve: PromiseResolve, _reject: PromiseReject) => {
        resolve = _resolve
        reject = _reject
      }
    ) {
      super(executor)
      this.resolve = resolve
      this.reject = reject
    }
  }
})()

export default Deffered
