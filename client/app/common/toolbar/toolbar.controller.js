class ToolbarController {
    sidenav:string = null;

    constructor($mdSidenav:SidenavService) {
        this.$mdSidenav = $mdSidenav;
    }

    toggleSidenav() {
        this.$mdSidenav(this.sidenav).toggle();
    }
}

ToolbarController.$inject = ['$mdSidenav'];

export default ToolbarController;
