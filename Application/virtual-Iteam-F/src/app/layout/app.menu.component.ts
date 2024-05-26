import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];

    constructor(public layoutService: LayoutService) { }

    ngOnInit() {
        // Fetch role from localStorage
        const role = localStorage.getItem('role');

        // Define menus based on the role
        switch (role) {
            case 'student':
                this.loadStudentMenus();
                break;
            case 'teacher':
                this.loadTeacherMenus();
                break;
            case 'admin':
                this.loadAdminMenus();
                break;
            default:
                // Handle default case here
                break;
        }
    }

    loadStudentMenus() {
        this.model = [
            {
                label: 'student',
                items: [
                    { label: 'My-virtual machines', icon: 'pi pi-fw pi-home', routerLink: ['/student/profil'] },
                    { label: 'profil', icon: 'pi pi-fw pi-home', routerLink: ['/student/profil'] },
                    { label: 'my-teachers', icon: 'pi pi-fw pi-home', routerLink: ['/student/teachers'] }


                ]
            },
            {
                label: 'Content Management',
                items: [
                    { label: 'Logout', icon: 'pi pi-fw pi-id-card', routerLink: ['/dashboard/pages/team'] },
                ]
            }
        ];
    }

    loadTeacherMenus() {
        this.model = [
            {
                label: 'teacher',
                items: [
                    { label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/'] }
                ]
            },
            {
                label: 'Content Management',
                items: [
                
                    { label: 'my Virtual', icon: 'pi pi-fw pi-id-card', routerLink: ['/teacher/formation'] },
                    { label: 'my Students', icon: 'pi pi-fw pi-check-square', routerLink: ['/teacher/student/'] },
                    { label: 'profil', icon: 'pi pi-fw pi-check-square', routerLink: ['/teacher/profil'] }

                ]
            }
        ];
    }
    

    loadAdminMenus() {
        this.model = [
            {
                label: 'admin',
                items: [
                    { label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/'] }
                ]
            },
            {
                label: 'Content Management',
                items: [
                
                    { label: 'my Virtual', icon: 'pi pi-fw pi-id-card', routerLink: ['/admin/vm-list'] },
                    { label: 'teachers', icon: 'pi pi-fw pi-check-square', routerLink: ['/admin/teacher-list/'] },
                    { label: 'students', icon: 'pi pi-fw pi-check-square', routerLink: ['/admin/student-list'] }

                ]
            }
        ];
    }
}
