'use client';

export default function Home() {
  const downloadLogo = (format) => {
    const canvas = document.createElement('canvas');
    const size = format === 'square' ? 2048 : format === 'banner' ? 2560 : 800;
    const height = format === 'banner' ? 1440 : size;

    canvas.width = size;
    canvas.height = height;
    const ctx = canvas.getContext('2d');

    // Background gradient
    const gradient = ctx.createLinearGradient(0, 0, size, height);
    gradient.addColorStop(0, '#FF0000');
    gradient.addColorStop(0.5, '#CC0000');
    gradient.addColorStop(1, '#990000');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, size, height);

    // Center position
    const centerX = size / 2;
    const centerY = height / 2;

    // Play button background (rounded square)
    const playBtnSize = format === 'banner' ? 400 : size * 0.25;
    ctx.fillStyle = 'rgba(255, 255, 255, 0.95)';
    ctx.beginPath();
    const radius = playBtnSize * 0.15;
    const x = centerX - playBtnSize / 2;
    const y = centerY - playBtnSize / 2 - (format === 'banner' ? 100 : 0);
    ctx.moveTo(x + radius, y);
    ctx.lineTo(x + playBtnSize - radius, y);
    ctx.quadraticCurveTo(x + playBtnSize, y, x + playBtnSize, y + radius);
    ctx.lineTo(x + playBtnSize, y + playBtnSize - radius);
    ctx.quadraticCurveTo(x + playBtnSize, y + playBtnSize, x + playBtnSize - radius, y + playBtnSize);
    ctx.lineTo(x + radius, y + playBtnSize);
    ctx.quadraticCurveTo(x, y + playBtnSize, x, y + playBtnSize - radius);
    ctx.lineTo(x, y + radius);
    ctx.quadraticCurveTo(x, y, x + radius, y);
    ctx.closePath();
    ctx.fill();

    // Play triangle
    ctx.fillStyle = '#FF0000';
    ctx.beginPath();
    const triangleSize = playBtnSize * 0.4;
    const triangleX = centerX + playBtnSize * 0.05;
    const triangleY = centerY - (format === 'banner' ? 100 : 0);
    ctx.moveTo(triangleX - triangleSize / 3, triangleY - triangleSize / 2);
    ctx.lineTo(triangleX - triangleSize / 3, triangleY + triangleSize / 2);
    ctx.lineTo(triangleX + triangleSize * 2 / 3, triangleY);
    ctx.closePath();
    ctx.fill();

    // Text
    const fontSize = format === 'banner' ? 180 : size * 0.12;
    ctx.font = `bold ${fontSize}px Arial, sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    // Text shadow
    ctx.shadowColor = 'rgba(0, 0, 0, 0.5)';
    ctx.shadowBlur = 15;
    ctx.shadowOffsetX = 3;
    ctx.shadowOffsetY = 3;

    const textY = centerY + playBtnSize / 2 + fontSize / 2 + (format === 'banner' ? 50 : size * 0.08);

    // "love" in white
    ctx.fillStyle = '#FFFFFF';
    const loveWidth = ctx.measureText('love').width;
    const twoWidth = ctx.measureText('2').width;
    const watchWidth = ctx.measureText('watch').width;
    const totalWidth = loveWidth + twoWidth + watchWidth;

    let startX = centerX - totalWidth / 2;
    ctx.fillText('love', startX + loveWidth / 2, textY);

    // "2" in yellow
    ctx.fillStyle = '#FFD700';
    startX += loveWidth;
    ctx.fillText('2', startX + twoWidth / 2, textY);

    // "watch" in white
    ctx.fillStyle = '#FFFFFF';
    startX += twoWidth;
    ctx.fillText('watch', startX + watchWidth / 2, textY);

    // Download
    canvas.toBlob((blob) => {
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `love2watch-logo-${format}.png`;
      a.click();
      URL.revokeObjectURL(url);
    });
  };

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', padding: '40px 20px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h1 style={{ textAlign: 'center', color: 'white', fontSize: '48px', marginBottom: '20px', fontWeight: 'bold' }}>
          love2watch Logo Generator
        </h1>
        <p style={{ textAlign: 'center', color: 'white', fontSize: '20px', marginBottom: '50px', opacity: 0.9 }}>
          Download your YouTube channel logo in various formats
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', marginBottom: '50px' }}>
          {/* Preview Card */}
          <div style={{ background: 'white', borderRadius: '20px', padding: '30px', boxShadow: '0 10px 40px rgba(0,0,0,0.2)' }}>
            <h2 style={{ fontSize: '24px', marginBottom: '20px', color: '#333' }}>Preview</h2>
            <div style={{
              width: '100%',
              aspectRatio: '1',
              background: 'linear-gradient(135deg, #FF0000 0%, #CC0000 50%, #990000 100%)',
              borderRadius: '15px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '20px',
              position: 'relative'
            }}>
              <div style={{
                width: '100px',
                height: '100px',
                background: 'rgba(255, 255, 255, 0.95)',
                borderRadius: '15px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '30px'
              }}>
                <div style={{
                  width: 0,
                  height: 0,
                  borderLeft: '30px solid #FF0000',
                  borderTop: '20px solid transparent',
                  borderBottom: '20px solid transparent',
                  marginLeft: '8px'
                }}></div>
              </div>
              <div style={{ fontSize: '32px', fontWeight: 'bold', color: 'white', textShadow: '2px 2px 8px rgba(0,0,0,0.3)' }}>
                <span>love</span>
                <span style={{ color: '#FFD700' }}>2</span>
                <span>watch</span>
              </div>
            </div>
          </div>

          {/* Download Options */}
          <div style={{ background: 'white', borderRadius: '20px', padding: '30px', boxShadow: '0 10px 40px rgba(0,0,0,0.2)' }}>
            <h2 style={{ fontSize: '24px', marginBottom: '20px', color: '#333' }}>Download Options</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <button
                onClick={() => downloadLogo('square')}
                style={{
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  color: 'white',
                  border: 'none',
                  padding: '15px 30px',
                  borderRadius: '10px',
                  fontSize: '18px',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  transition: 'transform 0.2s',
                }}
                onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
                onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
              >
                📱 Square (2048×2048) - Profile Picture
              </button>
              <button
                onClick={() => downloadLogo('banner')}
                style={{
                  background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                  color: 'white',
                  border: 'none',
                  padding: '15px 30px',
                  borderRadius: '10px',
                  fontSize: '18px',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  transition: 'transform 0.2s',
                }}
                onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
                onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
              >
                🎬 Banner (2560×1440) - Channel Art
              </button>
              <button
                onClick={() => downloadLogo('watermark')}
                style={{
                  background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
                  color: 'white',
                  border: 'none',
                  padding: '15px 30px',
                  borderRadius: '10px',
                  fontSize: '18px',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  transition: 'transform 0.2s',
                }}
                onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
                onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
              >
                💧 Watermark (800×800) - Video Overlay
              </button>
            </div>
          </div>
        </div>

        {/* Features */}
        <div style={{ background: 'rgba(255, 255, 255, 0.1)', borderRadius: '20px', padding: '30px', backdropFilter: 'blur(10px)' }}>
          <h2 style={{ fontSize: '28px', marginBottom: '20px', color: 'white', textAlign: 'center' }}>✨ Logo Features</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', color: 'white' }}>
            <div>
              <div style={{ fontSize: '36px', marginBottom: '10px' }}>🎯</div>
              <h3 style={{ fontSize: '20px', marginBottom: '8px' }}>YouTube Optimized</h3>
              <p style={{ opacity: 0.9 }}>Perfect dimensions for profile pictures, banners, and watermarks</p>
            </div>
            <div>
              <div style={{ fontSize: '36px', marginBottom: '10px' }}>🎨</div>
              <h3 style={{ fontSize: '20px', marginBottom: '8px' }}>Eye-Catching Design</h3>
              <p style={{ opacity: 0.9 }}>Bold red gradient with iconic play button symbol</p>
            </div>
            <div>
              <div style={{ fontSize: '36px', marginBottom: '10px' }}>💛</div>
              <h3 style={{ fontSize: '20px', marginBottom: '8px' }}>Brand Identity</h3>
              <p style={{ opacity: 0.9 }}>Distinctive "2" in gold emphasizes your unique channel name</p>
            </div>
            <div>
              <div style={{ fontSize: '36px', marginBottom: '10px' }}>⚡</div>
              <h3 style={{ fontSize: '20px', marginBottom: '8px' }}>Instant Download</h3>
              <p style={{ opacity: 0.9 }}>High-resolution PNG files ready to use immediately</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
