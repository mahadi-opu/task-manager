const posts = [
    {
        id :1,
        clientname: "Mahadi Opu",
        clientimages:"https://www.sportsadda.com/static-assets/waf-images/86/3a/4b/4-3/J5cZ61KuVq.jpg?v=1.3&w=1024?stp=c0.48.526.526a_cp0_dst-jpg_p526x296_q75_spS444&_nc_cat=1&ccb=1-7&_nc_sid=e84a38&_nc_eui2=AeFlefRvqPBFfN-5O1Hvf7BVVpcKQcQTdodWlwpBxBN2h9XW7wbqiLvWvW9zSnS05jm8ycZqz_icTYtqMW24uJ8Y&_nc_ohc=Rlt1eyUd9NAAX_52Z1P&_nc_ht=scontent.fdac142-1.fna&oh=00_AfAnyhNwa-kYIxLe_ES_VWyssFhx8iyhirKtTrJC2ZjNug&oe=64A2B092",
        username: "Sadik Istiak ",
        userimages:"https://reinforcelab.com/wp-content/uploads/2023/01/Syed-Mahadi-Hasan-Opu-reinforce-lab-scaled.jpg",
        postcontent: "Lorem ipsum, dolor sit amet...",
        like :12,
        comment: 25,
        file: 25,
        timeAgo: "15 min",
    },
    {
        id :2,
        clientname: "ABu Sayeed ",
        clientimages:"https://www.sportsadda.com/static-assets/waf-images/86/3a/4b/4-3/J5cZ61KuVq.jpg?v=1.3&w=1024?stp=c0.48.526.526a_cp0_dst-jpg_p526x296_q75_spS444&_nc_cat=1&ccb=1-7&_nc_sid=e84a38&_nc_eui2=AeFlefRvqPBFfN-5O1Hvf7BVVpcKQcQTdodWlwpBxBN2h9XW7wbqiLvWvW9zSnS05jm8ycZqz_icTYtqMW24uJ8Y&_nc_ohc=Rlt1eyUd9NAAX_52Z1P&_nc_ht=scontent.fdac142-1.fna&oh=00_AfAnyhNwa-kYIxLe_ES_VWyssFhx8iyhirKtTrJC2ZjNug&oe=64A2B092",
        username: "SAbera ",
        userimages:"https://www.sportsadda.com/static-assets/waf-images/86/3a/4b/4-3/J5cZ61KuVq.jpg?v=1.3&w=1024?stp=c0.48.526.526a_cp0_dst-jpg_p526x296_q75_spS444&_nc_cat=1&ccb=1-7&_nc_sid=e84a38&_nc_eui2=AeFlefRvqPBFfN-5O1Hvf7BVVpcKQcQTdodWlwpBxBN2h9XW7wbqiLvWvW9zSnS05jm8ycZqz_icTYtqMW24uJ8Y&_nc_ohc=Rlt1eyUd9NAAX_52Z1P&_nc_ht=scontent.fdac142-1.fna&oh=00_AfAnyhNwa-kYIxLe_ES_VWyssFhx8iyhirKtTrJC2ZjNug&oe=64A2B092",
        postcontent: "Lorem ipsum, dolor sit amet...",
        like :12,
        comment: 25,
        file: 25,
        timeAgo: "15 min",
    },
    {
        id :3,
        clientname: "Toma ",
        clientimages:"https://www.sportsadda.com/static-assets/waf-images/86/3a/4b/4-3/J5cZ61KuVq.jpg?v=1.3&w=1024?stp=c0.48.526.526a_cp0_dst-jpg_p526x296_q75_spS444&_nc_cat=1&ccb=1-7&_nc_sid=e84a38&_nc_eui2=AeFlefRvqPBFfN-5O1Hvf7BVVpcKQcQTdodWlwpBxBN2h9XW7wbqiLvWvW9zSnS05jm8ycZqz_icTYtqMW24uJ8Y&_nc_ohc=Rlt1eyUd9NAAX_52Z1P&_nc_ht=scontent.fdac142-1.fna&oh=00_AfAnyhNwa-kYIxLe_ES_VWyssFhx8iyhirKtTrJC2ZjNug&oe=64A2B092",
        username: "Fobia ",
        userimages:"https://www.sportsadda.com/static-assets/waf-images/86/3a/4b/4-3/J5cZ61KuVq.jpg?v=1.3&w=1024?stp=c0.48.526.526a_cp0_dst-jpg_p526x296_q75_spS444&_nc_cat=1&ccb=1-7&_nc_sid=e84a38&_nc_eui2=AeFlefRvqPBFfN-5O1Hvf7BVVpcKQcQTdodWlwpBxBN2h9XW7wbqiLvWvW9zSnS05jm8ycZqz_icTYtqMW24uJ8Y&_nc_ohc=Rlt1eyUd9NAAX_52Z1P&_nc_ht=scontent.fdac142-1.fna&oh=00_AfAnyhNwa-kYIxLe_ES_VWyssFhx8iyhirKtTrJC2ZjNug&oe=64A2B092",
        postcontent: "Lorem ipsum, dolor sit amet...",
        like :12,
        comment: 25,
        file: 25,
        timeAgo: "15 min",
    },
    {
        id :4,
        clientname: "Tonni ",
        clientimages:"https://www.sportsadda.com/static-assets/waf-images/86/3a/4b/4-3/J5cZ61KuVq.jpg?v=1.3&w=1024?stp=c0.48.526.526a_cp0_dst-jpg_p526x296_q75_spS444&_nc_cat=1&ccb=1-7&_nc_sid=e84a38&_nc_eui2=AeFlefRvqPBFfN-5O1Hvf7BVVpcKQcQTdodWlwpBxBN2h9XW7wbqiLvWvW9zSnS05jm8ycZqz_icTYtqMW24uJ8Y&_nc_ohc=Rlt1eyUd9NAAX_52Z1P&_nc_ht=scontent.fdac142-1.fna&oh=00_AfAnyhNwa-kYIxLe_ES_VWyssFhx8iyhirKtTrJC2ZjNug&oe=64A2B092",
        username: "Asad Zamman ",
        userimages:"https://www.sportsadda.com/static-assets/waf-images/86/3a/4b/4-3/J5cZ61KuVq.jpg?v=1.3&w=1024?stp=c0.48.526.526a_cp0_dst-jpg_p526x296_q75_spS444&_nc_cat=1&ccb=1-7&_nc_sid=e84a38&_nc_eui2=AeFlefRvqPBFfN-5O1Hvf7BVVpcKQcQTdodWlwpBxBN2h9XW7wbqiLvWvW9zSnS05jm8ycZqz_icTYtqMW24uJ8Y&_nc_ohc=Rlt1eyUd9NAAX_52Z1P&_nc_ht=scontent.fdac142-1.fna&oh=00_AfAnyhNwa-kYIxLe_ES_VWyssFhx8iyhirKtTrJC2ZjNug&oe=64A2B092",
        postcontent: "Lorem ipsum, dolor sit amet...",
        like :12,
        comment: 25,
        file: 25,
        timeAgo: "15 min",
    },
    
    
];