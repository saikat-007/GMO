import SingleParent from './SingleParent'; 

const Component2 = () => {
  const jsonData = [
    {
      "parent": "customer_service",
      "child": [
        "support",
        "customer_success"
      ]
    },
    {
      "parent": "design",
      "child": [
        "graphic_design",
        "product_design",
        "web_design",
        "ui_design"
      ]
    },
    {
      "parent": "Parent 3",
      "child": [
        "Child 1",
        "Child 2",
        "Child 3",
        "Child 4"
      ]
    }
  ];

  return (
    <div>
      {jsonData.map(item => (
        <SingleParent
          key={item.parent}
          parentLabel={item.parent}
          childLabels={item.child}
        />
      ))}
    </div>
  );
}

export default Component2;
