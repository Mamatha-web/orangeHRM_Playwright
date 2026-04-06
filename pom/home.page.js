export class HomePage{
    constructor(page){
        this.adminLink = page.getByText('Admin')
        this.pimLink = page.getByText('PIM')
        this.leaveLink = page.getByRole('link',{name:'Leave'})
        this.timeLink = page.getByText('Time')
        this.recruitmentLink =page.getByText('Recruitment')
        this.myInfoLink  =page.getByText('My Info')
        this.performanceLink =page.getByText('Performance')
        this.dashboardLink = page.getByText('Dashboard')
        this.directoryLink=page.getByText('Directory')
        this.maintainanceLink = page.getByText('Maintenance')
        this.claimLink = page.getByText('Claim')
    }
}