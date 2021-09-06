import SvgIcon, { SvgIconProps } from '@material-ui/core/SvgIcon'

const LogoDark = (props: SvgIconProps) => (
  <SvgIcon {...props} width="49" height="49" viewBox="0 0 49 49">
    <circle cx="24.5" cy="24.5" r="24.5" fill="#212121" />
    <mask
      id="mask0"
      mask-type="alpha"
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      width="49"
      height="49"
    >
      <circle cx="24.5" cy="24.5" r="24.5" fill="#212121" />
    </mask>
    <g mask="url(#mask0)">
      <path
        d=""
        fill="white"
      />
    </g>
  </SvgIcon>
)

export default LogoDark
