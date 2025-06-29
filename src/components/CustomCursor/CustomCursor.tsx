import React, { useState, useEffect } from 'react';

interface CursorPosition {
  x: number;
  y: number;
}

const CustomCursor = () => {
  const [cursorPosition, setCursorPosition] = useState<CursorPosition>({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState<string>('default');
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isClicking, setIsClicking] = useState<boolean>(false);

  useEffect(() => {
    const updateCursorPosition = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleElementHover = (variant: string) => {
      return () => setCursorVariant(variant);
    };

    const handleElementLeave = () => setCursorVariant('default');

    // Add event listeners
    document.addEventListener('mousemove', updateCursorPosition);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

    // Add hover effects for different elements
    const buttons = document.querySelectorAll('button, .btn-primary, .btn-secondary');
    const links = document.querySelectorAll('a, .nav-link, .contact-link, .social-link, .project-link');
    const interactiveElements = document.querySelectorAll('.skill-card, .project-card, article, .cursor-pointer');

    buttons.forEach(button => {
      button.addEventListener('mouseenter', handleElementHover('button'));
      button.addEventListener('mouseleave', handleElementLeave);
    });

    links.forEach(link => {
      link.addEventListener('mouseenter', handleElementHover('link'));
      link.addEventListener('mouseleave', handleElementLeave);
    });

    interactiveElements.forEach(element => {
      element.addEventListener('mouseenter', handleElementHover('hover'));
      element.addEventListener('mouseleave', handleElementLeave);
    });

    return () => {
      document.removeEventListener('mousemove', updateCursorPosition);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);

      buttons.forEach(button => {
        button.removeEventListener('mouseenter', handleElementHover('button'));
        button.removeEventListener('mouseleave', handleElementLeave);
      });

      links.forEach(link => {
        link.removeEventListener('mouseenter', handleElementHover('link'));
        link.removeEventListener('mouseleave', handleElementLeave);
      });

      interactiveElements.forEach(element => {
        element.removeEventListener('mouseenter', handleElementHover('hover'));
        element.removeEventListener('mouseleave', handleElementLeave);
      });
    };
  }, []);

  if (!isVisible) return null;

  const getCursorStyles = () => {
    const baseStyles = {
      left: cursorPosition.x,
      top: cursorPosition.y,
      transform: 'translate(-50%, -50%)',
      pointerEvents: 'none' as const,
      zIndex: 9999,
      position: 'fixed' as const,
      borderRadius: '50%',
      transition: 'all 0.15s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    };

    switch (cursorVariant) {
      case 'button':
        return {
          ...baseStyles,
          width: '32px',
          height: '32px',
          background: 'rgba(61, 220, 132, 0.15)',
          border: '1px solid rgba(61, 220, 132, 0.4)',
          backdropFilter: 'blur(4px)',
          transform: `translate(-50%, -50%) ${isClicking ? 'scale(0.8)' : 'scale(1)'}`,
        };
      case 'link':
        return {
          ...baseStyles,
          width: '24px',
          height: '24px',
          background: 'rgba(61, 220, 132, 0.2)',
          border: '1px solid rgba(61, 220, 132, 0.5)',
          transform: `translate(-50%, -50%) ${isClicking ? 'scale(0.8)' : 'scale(1)'}`,
        };
      case 'hover':
        return {
          ...baseStyles,
          width: '40px',
          height: '40px',
          background: 'rgba(61, 220, 132, 0.08)',
          border: '1px solid rgba(61, 220, 132, 0.25)',
          backdropFilter: 'blur(2px)',
          transform: `translate(-50%, -50%) ${isClicking ? 'scale(0.9)' : 'scale(1)'}`,
        };
      default:
        return {
          ...baseStyles,
          width: isClicking ? '6px' : '8px',
          height: isClicking ? '6px' : '8px',
          background: '#3DDC84',
          border: 'none',
          boxShadow: '0 0 8px rgba(61, 220, 132, 0.3)',
        };
    }
  };

  return (
    <>
      {/* Main Cursor Dot */}
      <div style={getCursorStyles()}>
        {/* Inner dot for better visibility */}
        {cursorVariant === 'default' && (
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '2px',
              height: '2px',
              background: '#ffffff',
              borderRadius: '50%',
            }}
          />
        )}
      </div>

      {/* Outer Ring for Enhanced States */}
      {(cursorVariant === 'button' || cursorVariant === 'link' || cursorVariant === 'hover') && (
        <div
          style={{
            left: cursorPosition.x,
            top: cursorPosition.y,
            transform: `translate(-50%, -50%) ${isClicking ? 'scale(0.7)' : 'scale(1)'}`,
            pointerEvents: 'none',
            zIndex: 9998,
            position: 'fixed',
            width: cursorVariant === 'button' ? '48px' : cursorVariant === 'hover' ? '56px' : '36px',
            height: cursorVariant === 'button' ? '48px' : cursorVariant === 'hover' ? '56px' : '36px',
            border: '1px solid rgba(61, 220, 132, 0.15)',
            borderRadius: '50%',
            transition: 'all 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          }}
        />
      )}

      {/* Click Ripple Effect */}
      {isClicking && (
        <div
          style={{
            left: cursorPosition.x,
            top: cursorPosition.y,
            transform: 'translate(-50%, -50%)',
            pointerEvents: 'none',
            zIndex: 9997,
            position: 'fixed',
            width: '20px',
            height: '20px',
            border: '1px solid rgba(61, 220, 132, 0.4)',
            borderRadius: '50%',
            animation: 'cursor-ripple 0.6s ease-out forwards',
          }}
        />
      )}

      {/* CSS Animation for Ripple */}
      <style>{`
        @keyframes cursor-ripple {
          0% {
            width: 20px;
            height: 20px;
            opacity: 1;
          }
          100% {
            width: 60px;
            height: 60px;
            opacity: 0;
          }
        }
      `}</style>
    </>
  );
};

export default CustomCursor;