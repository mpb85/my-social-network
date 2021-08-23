import React from 'react';
import s from './Header.module.css'

const Header = () => {
    return (
        <div className={s.grid}>
            <header className={s.header}>

                <img
                    src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATMAAACkCAMAAADMkjkjAAAAe1BMVEX///8AAAD19fWdnZ1qamrv7++3t7fe3t7p6emrq6sZGRnNzc3Y2NhERES8vLyXl5c3NzeNjY2FhYVfX1+ioqLFxcXw8PDb29vQ0NB8fHyOjo4zMzNAQEAMDAxUVFRaWlpMTEwnJyd1dXUgICBnZ2cTExMsLCwcHBywsLA+5NzKAAAIxElEQVR4nO2d53rqMAyGcVhhlLSMQlo2PS33f4WHTDLkIcfOwP7+nPM0EImXEEu2rPR6VlZWVlZWVlY65DTtgLgW8/CfzUeTTjj9b0KI16QLCLmEuI9/7oSMmnPig0RaNecCRitC/vV6u8DjplxYkFSbpnzAaBt4uh+FDn814oFzfCIj10ZcQGqfcZg0cRfeZR0g5wY8wMrLefy27C/G9TqwzjlATvVal1HB40jHfn3clgXbzdweENp8Q8gC/XluLR74RcPzWszKa0AjFt1ZFvo9KCF712+zkmZMZIHWmj0o3xnafpn1ucwI6et0oPylNZqKiOhHgBkhE232nZKtpTZbijQUQvZIEnSF5m9FSzXcQKvJ/SfI7BF7DHU4ULyZtf4iy6Z4AtIw31C4zK9avhelclHICLltVXtwyp7e/1R9eg0aIZkpH9KyWeayG5ONczQzclGaUD0zkLd6Mg4FuuKhqQxxNzpOql0TCWhHZdaTy+xQ8yxKRQ3fJagpym2SDOBNzelqlFgikJeaZOpN9XVbn84S0FSscoyjU+0VnKp+rR6e/y4nHuZn+q/6OBcPQN0IMUoaz6L4e8ieS8trVtFonJzvqrvfsDDQKt7Uokyz/fklVzsOp5yqraiFswMHRX43qTGGWaUgIQo0OrH4yxHqOiNkKp9VBwMPOStzvG65s8V9tAljccz9LJRsBP9Z6d3Nauw9J0rflkcaGrokf11fwXs7UsuS17w0s4yX3FJBZy+zDw4OMfkSlsO5gS5eZl9KkEndycP3KZ/11S9cXMHSBZv/TCRRN67Skn8FIe9M4XuqJl9N6FchM1xFafht/er6XDqVLm3++pfq0BCJ1BxPuS1K49dHMD+WWRnI6yb8+4xer/OjaVMyBkSTfp/UwGN9oh0pSHCiIwqcu1LQXlC87p/GV3CJ0E58peVb5FKLh54urP9CitaEM9nPvTxVG2LYlP5MET++jYPCgbYPpV13/5qvw9l+gAz4lX2JOKlUUjnb9rI8pMbrwSX8XKf1M1YVnySasoqhkqHmW//HaIHErzRyo4URw7TWoIvxrIRQ05F9KJt61pr91O59Q8JVxKwWBWyLW3rsFVYBBIVN6vdfm3gV1JnlhpbO1AApkCOTok5/L4W/vNiYyVP1FMs4ZNgKXEhdnNCuKAe9NJXTe0fLMypqvuejoekFSg0kNZNY0wt06H5BSwW5UktWnZxmVKn5B7qstJPT2YrlbLyV+OYf0ok90/XI3Y3WX/51sDqd/3jQOjo7q1cbTtTb1elZzQI7AiQyN9jgiLXa3LRvrRVjgtL4eIOqzxuNWReLgeoSdQht2rEW65PG7BXKjnWJNmtkR06GKCULbW/S0qhobSia9qvVooRpxs1tY0S50PT1hHkFwdPgdhBgaQsy6+K+4BoFz0o27VW7dbfM8AKZmVR6ICEw3LDBBlNgFyehjNMRFvdd3ENYi9xTIc4IvA1KoISm0MBfNaxMZ1bIXHwYWl3MTEx5qMUgSPv855qJlbsfykskUP2VUFCLcjetAYEiwtgpDziUVkJju5rBOmf8R1QDlSpYgDYxQg2VcN4ml7gks3JTSTk9N+ijNpMVF5aABEpowQ7nbPLhJZlVq9vJ6B6fEI7maSrNXZd3iQp1hkY6W4mZqsvsWY+OrNMrrWCWbq5CzfqQzs6qMBPeMsJX7D11OQRWaXtAqeBbB7NFFWb4Ho1UuVLel0fFYtd2y6woIJK45F8hPQYMfN9fwVZ1MFv51Mqnk0/pGMFkdhhQ+qYBzArRj/R1FgYycBti9cymLp1m4Ah8E2QxCxxxwTVMKGLNr0EJVVRBp44SVXBvh3pmUVeG4n0lVJT8gVs3GcyizTfgJgswys+brsYMPKSeWY/+BUWHwNyBwSxOs6EhFc6MchW4IgEaZDVmBt1llDP7iw6Bl0V0CFz1ZjCLwyHoRkjJJi/Z1wi01Yas1slsymUGLhEpZZaLtQXuaJBV05jlf/78hwRAVo1jls9bufOOkFXzmOWTKN4qJ2TVQGb58scDuy0VZNVEZgUPmNAgq0Yyy7+DuS0Fsmoos1xGwNosAFk1lVk292Rtf4WsGsus56YZF2txGLJqLrPnGVmdSSCrJjM7C7wUsmoys+RDs/ZXQFZNZpa26WBs6IesmswsHQQYE2mQVcssEH0iDbJqMrPn48POllkgAWaZBh3UiTTIqsnMMmuUZ8uMCDHL5JzU3U+QVZOZZXq3UmvRIKuVmEFd7DvELDNhS43QIKsmM3uekr4xEbJqNLO0YJTeDBOyajSzdGGA3g4Zsmo0M4EsHbJqNrNkgZi+xw6yajazpHrrbJkFEtwGvL0EL6YvPUFWTWf2GAiWxz29bgOyWqn+7CWYsQVZjZhBSZBlRrO6cxzHhXfFWGYUqwx1gBlDlpllBuhFmPH3O1lm8MewzBBKqiYtM2H9Je+yzET1bLBvmYnpmOk3YJkVxX+YbpuZCecB7nws92QKyCq/AUz3mbnRVvaLzKUHWTWAmUcuI7fnzD9kHhwDWX19Ztf0v86RoJ/qAVl9eWb9x4vcxSJ6lNhKZPuh8cyGga9hz7h9MAgcsB0JIauvzmxJQmcGo1O4W3Mj9Qj1guSYxU18oFWEljEL6z5HwZcc2cA+1gOyKscs8gh8EkS7mA3DlwTMXHIJ/nBENsGHrEoyI4PNBmiPRdrGbBz+Fkfk+xzPB/rIPtuQVVlmVLWN2TZ2ZhqFGf7eMuMw64UdCEdkeYtfu79aZjxm7z+hM944Kmh3sA9CgazymaHa26VTlW1hdg9QjR6j5zosMPCwnXwhq3xmyMeDbtrFrHc4B+CWQS/P1WPw7NfCrHeg4YEUc2kPszF53sE+M90h9TJDPSc6CbNbw6y3I3s38Qk5aMoz67nCz4n+TntYM3osqWcG5SPPuaDhmbx7k4kv9Wi/flmeWKPu+Rp4b0nrzBew9YDj8WcADsWfxoEOOVzvJ8Ch7MUw/jpPLz/2wRRWVlZWVhj9B4hJmXhSHPKVAAAAAElFTkSuQmCC'/>
            </header>
        </div>
    );

};

export default Header;