import Typography from '@/components/Typography'
import '@/styles/pages/playground.scss';

const ColorPlayground = () => {
    const colors = [
        { name: 'Black', variable: '--color-black' },
        { name: 'White', variable: '--color-white' },
        { name: 'Gray 100', variable: '--color-gray-100' },
        { name: 'Gray 300', variable: '--color-gray-300' },
        { name: 'Gray 600', variable: '--color-gray-600' },
        { name: 'Gray 800', variable: '--color-gray-800' },
        { name: 'Blue', variable: '--color-blue' },
        { name: 'Point', variable: '--color-point' },
    ];
    return (
        <>
            <div className="playground">
                <Typography.Title>Color</Typography.Title>
                <div className="playground__inner">
                    {
                        colors.map((color) => (
                            <div key={color.variable} className="color-swatch">
                                <div className="color-box" style={{ backgroundColor: `var(${color.variable})` }}></div>
                                <div className="color-info">
                                    <p className="color-name">{color.name}</p>
                                    <p className="color-value">{color.variable}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    );
}

export default ColorPlayground;