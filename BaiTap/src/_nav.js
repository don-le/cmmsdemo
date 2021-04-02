export default {
  items: [
    {
      name: 'Dashboard',
      url: '/dashboard',
      icon: 'icon-speedometer',
      badge: {
        variant: 'info',
      },
    },
    {
      name: 'Report',
      url: '/report',
      icon: 'icon-note',
      badge: {
        variant: 'info',
        text: 'HOT',
      },
    },
    {
      name: 'Statistics',
      url: '/statistics',
      icon: 'icon-calculator',
      badge: {
        variant: 'info',
        text: 'HOT',
      },
    },
    {
      name: 'Buttons',
      url: '/buttons',
      icon: 'icon-cursor',
      children: [
        {
          name: 'Brand Buttons',
          url: '/buttons/brand-buttons',
          icon: 'icon-cursor',
        },
      ],
      
    },
    {
      name: 'Charts',
      url: '/charts',
      icon: 'icon-pie-chart'
    },
    {
      name: 'Tables',
      url: '/tables',
      icon: 'icon-list',
    },
    {
      name: 'Widgets',
      url: '/widgets',
      icon: 'icon-calculator',
      badge: {
        variant: 'info',
        text: 'NEW',
      },
    },
    {
      name: 'Mockups',
      url: '/mockups',
      icon: 'icon-calculator',
      badge: {
        variant: 'info',
        text: 'HOT',
      },
      children: [
        {
          name: 'Insight1',
          url: '/mockups/insight1',
          icon: 'icon-calculator',
        },
        {
          name: 'Insight2',
          url: '/mockups/insight2',
          icon: 'icon-calculator',
        }
      ],
    },
  ]
};
