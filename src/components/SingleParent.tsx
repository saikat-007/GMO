import * as React from 'react';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';

interface SingleParentProps {
    parentLabel: string;
    childLabels: string[];
}

export default function SingleParent({ parentLabel, childLabels }: SingleParentProps) {
    const [checked, setChecked] = React.useState(Array(childLabels.length).fill(false));
    const [childVisible, setChildVisible] = React.useState(false);

    const toggleChildVisibility = () => {
        setChildVisible(!childVisible);
    };

    const handleParentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const parentChecked = event.target.checked;
        setChecked(Array(childLabels.length).fill(parentChecked)); // Update all child checkboxes
        setChildVisible(parentChecked);
    };

    const handleChange = (index: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
        const newChecked = [...checked];
        newChecked[index] = event.target.checked;
        setChecked(newChecked);
    };

    const children = (
        <Box sx={{ display: childVisible ? 'flex' : 'none', flexDirection: 'column', ml: 3 }}>
            {childLabels.map((childLabel, index) => (
                <FormControlLabel
                    key={index}
                    label={childLabel}
                    control={<Checkbox checked={checked[index]} onChange={handleChange(index)} />}
                />
            ))}
        </Box>
    );

    return (
        <div>
            <FormControlLabel
                label={parentLabel}
                control={
                    <Checkbox
                        checked={checked.every(Boolean)}
                        indeterminate={!checked.every(Boolean) && checked.some(Boolean)}
                        onChange={handleParentChange}
                    />
                }
            />
            <Button onClick={toggleChildVisibility}>
                {childVisible ? 'Collapse' : 'Expand'} Children
            </Button>
            {children}
        </div>
    );
}
