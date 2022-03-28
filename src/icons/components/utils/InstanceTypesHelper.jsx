exports.InstanceTypes = [
  ["1", "t2.nano", "1", "300", "0.012", "No"],
  ["2", "t2.micro", "2", "400", "0.014", "Yes"],
  ["3", "t2.small", "2", "500", "0.015", "Yes"],
  ["4", "t2.medium", "3", "500", "0.018", "Yes"]
];

// ID Must be the first column due to the implementation
exports.InstanceTypeColumns = [
  {
    name: "ID",
    options: {
      filter: true,
      sort: true,
      display: "excluded"
    }
  },
  {
    name: "Instance type",
    options: {
      filter: true,
      sort: true
    }
  },
  {
    name: "vCPU",
    options: {
      filter: true,
      sort: true
    }
  },
  {
    name: "Memory",
    options: {
      filter: true,
      sort: false
    }
  },
  {
    name: "Price/hr",
    options: {
      filter: true,
      sort: false
    }
  },
  {
    name: "EBS Optimized",
    options: {
      filter: true,
      sort: false
    }
  }
];
