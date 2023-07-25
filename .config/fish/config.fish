if status is-interactive
    # Commands to run in interactive sessions can go here
end

alias ..='cd ..'

alias ga='git add'
alias gs='git status'
alias gl='git log'
alias gc='git commit'
alias gpl='git pull'
alias gsw='git switch'
alias grh='git reset --hard && git clean -f'
alias gsl='git stash list'
alias gsp='git stash pop'
alias gss='git stash save -u'
alias gsd='git stash drop'
alias gbd='git fetch -p && git branch -vv | grep ': gone]' | awk '{print $1}' | xargs git branch -D'

alias lg='lazygit'

# alias for webstorm
alias ws='webstorm'

# alias for pnpm
alias pn='pnpm'

# postgreslql
set -x PGDATA /usr/local/var/postgres/

# intellij idea
fish_add_path /usr/local/bin/idea

# go
fish_add_path /Users/wata/go/bin

# rbenv
set -x PATH $HOME/.rbenv/bin $PATH
status --is-interactive; and source (rbenv init -|psub)

# deno
set -x DENO_INSTALL /Users/wata/.deno
set -x PATH $DENO_INSTALL/bin:$PATH

# sbin
fish_add_path /usr/local/sbin

# progate
fish_add_path $HOME/.progate/bin
fish_add_path /Users/wata/progate_path/bootcamp_commandline/bootcamp_commandline/new_command

set -gx PNPM_HOME "/Users/wata/Library/pnpm"
set -gx PATH "$PNPM_HOME" $PATH
set -gx VOLTA_HOME "$HOME/.volta"
set -gx PATH "$VOLTA_HOME/bin" $PATH

# tabtab source for electron-forge package
# uninstall by removing these lines or running `tabtab uninstall electron-forge`
[ -f /Users/wata/.npm/_npx/6913fdfd1ea7a741/node_modules/tabtab/.completions/electron-forge.fish ]; and . /Users/wata/.npm/_npx/6913fdfd1ea7a741/node_modules/tabtab/.completions/electron-forge.fish

