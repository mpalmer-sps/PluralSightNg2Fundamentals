import { Injectable, ViewContainerRef } from "@angular/core";

import { ToastsManager } from "ng2-toastr/src/toast-manager";

@Injectable()
export class ToastrService {

    constructor(public toastr: ToastsManager, vcr: ViewContainerRef) {
        this.toastr.setRootViewContainerRef(vcr);
    }

    success(message: string, title?: string) {
        this.toastr.success(message, title)
    }

    info(message: string, title?: string) {
        this.toastr.info(message, title)
    }

    warning(message: string, title?: string) {
        this.toastr.warning(message, title)
    }

    error(message: string, title?: string) {
        this.toastr.error(message, title)
    }

}