import React from 'react';
import OriginalSidebarItemLink from '@theme-original/DocSidebarItem/Link';
import {
  FaHome,
  FaCogs,
  FaBook,
  FaInfoCircle,
  FaMousePointer,
  FaQuestionCircle,
  FaCubes,
  FaCode,
  FaFolderOpen,
  FaLightbulb,
  FaKeyboard,
  FaSearch,
  FaProjectDiagram,
  FaWrench
} from 'react-icons/fa';

const iconMap = {
  // Inicio
  'Inicio': <FaHome style={{ marginRight: 8 }} />,
  'Crear Página': <FaCogs style={{ marginRight: 8 }} />,
  'Crear Documento': <FaBook style={{ marginRight: 8 }} />,

  // Gestor de contraseñas
  'Introducción': <FaInfoCircle style={{ marginRight: 8 }} />,
  'Herramientas': <FaWrench style={{ marginRight: 8 }} />,
  'Implementación': <FaFolderOpen style={{ marginRight: 8 }} />,
  'Recomendaciones finales': <FaLightbulb style={{ marginRight: 8 }} />,
};

export default function DocSidebarItemLinkWrapper(props) {
  const originalLabel = props.item.label;
  const icon = iconMap[originalLabel];

  return (
    <OriginalSidebarItemLink
      {...props}
      item={{
        ...props.item,
        label: (
          <span style={{ display: 'flex', alignItems: 'center' }}>
            {icon}
            {originalLabel}
          </span>
        ),
      }}
    />
  );
}
