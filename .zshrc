source $HOME/.zprezto/runcoms/zshrc
for config_file ($HOME/.yadr/zsh/*.zsh) source $config_file

# git alias
alias g='git'
alias gs='git status'
alias gb='git branch'
alias gct='git commit'
alias ga='git add'
alias gd='git diff'
alias gl='git log'
alias gcm='git commit -m'
alias gpo='git push origin'
alias gpom='git push origin main'
alias gst='git stash'

# lazygit alias
alias lg='lazygit'

# move directory without 'cd'
setopt auto_cd

# emacskey binding
bindkey -d
Bindkey -e

# completion
zstyle ':completion:*' matcher-list 'm:{a-z}={A-Z}'
zstyle ':completion:*:default' menu select=1
